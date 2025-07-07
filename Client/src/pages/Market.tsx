import { useQuery } from "@tanstack/react-query";
import { getAllListings } from "../lib/query/listings.queryOptions";
import { useState } from "react";
import Badge from "../lib/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../lib/ui/Card";
import {
  Icon_Building,
  Icon_Factory,
  Icon_Filter,
  Icon_Grid,
  Icon_List,
  Icon_MapPin,
  Icon_Search,
} from "../lib/utils/icons";
import Button from "../lib/ui/Button";
import placeholder from "../assets/placeholder.svg";
import { getAllCategories } from "../lib/query/categories.queryOptions";
import { Option, Select } from "../lib/ui/Select";

function Market() {
  const { data } = useQuery(getAllListings());
  const { data: categories } = useQuery(getAllCategories());
  const [viewMode, setviewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMachineType, setSelectedMachineType] = useState("All Types");
  const [sortBy, setSortBy] = useState("name");
  const [showFilters, setShowFilters] = useState(false);

  const filteredListings = data?.data
    .filter((listing: any) => {
      const matchesSearch =
        listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        listing.user_id.username
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      const matchesType =
        selectedMachineType === "All Types" ||
        listing.category.name === selectedMachineType;
      return matchesSearch && matchesType;
    })
    .sort((a: any, b: any) => {
      switch (sortBy) {
        case "price-low":
          return a.price_per_hour - b.price_per_hour;
        case "price-high":
          return b.price_per_hour - a.price_per_hour;
        case "name":
        default:
          return a.title.localeCompare(b.title);
      }
    });

  return (
    <>
      <section className="py-12 bg-white border-b border-gray-400">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Manufacturing Capacity Market
              </h1>
              <p className="text-lg text-gray-600">
                Discover available manufacturing capacity from verified partners
                worldwide
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="text-sm">
                {filteredListings?.length} Active Listings
              </Badge>
            </div>
          </div>
        </div>
      </section>
      <section className="py-6 bg-white border-b border-gray-400">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Icon_Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="hidden lg:flex items-center gap-4">
              <Select
                value={selectedMachineType}
                onValueChange={setSelectedMachineType}
              >
                <Option value="All Types">All Types</Option>
                {categories?.data.map((category: any) => (
                  <Option key={category._id} value={category.name}>
                    {category.name}
                  </Option>
                ))}
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <Option value="name">Name A-Z</Option>
                <Option value="price-low">Price: Low to High</Option>
                <Option value="price-high">Price: High to Low</Option>
              </Select>
            </div>
            <div className="flex lg:hidden items-center gap-2">
              <Button
                size="md"
                variant="outline"
                action={() => setShowFilters(!showFilters)}
              >
                <Icon_Filter className="mr-2 h-4 w-4 fill-gray-400" /> Filters
              </Button>
              <div className="flex border rounded-lg">
                <Button
                  size="sm"
                  variant={viewMode === "grid" ? "solid" : "ghost"}
                  action={() => setviewMode("grid")}
                >
                  <Icon_Grid className="h-4 w-4 fill-gray-400" />
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === "list" ? "solid" : "ghost"}
                  action={() => setviewMode("list")}
                >
                  <Icon_List className="h-4 w-4 fill-gray-400" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex items-center border rounded-lg">
              <Button
                size="md"
                variant={viewMode === "grid" ? "solid" : "ghost"}
                action={() => setviewMode("grid")}
              >
                <Icon_Grid className="h-4 w-4 fill-gray-400" />
              </Button>
              <Button
                size="md"
                variant={viewMode === "list" ? "solid" : "ghost"}
                action={() => setviewMode("list")}
              >
                <Icon_List className="h-4 w-4 fill-gray-400" />
              </Button>
            </div>
          </div>

          {showFilters && (
            <div className="lg:hidden mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
              <Select
                value={selectedMachineType}
                onValueChange={setSelectedMachineType}
              >
                <Option value="All Types">All Types</Option>
                {categories?.data.map((category: any) => (
                  <Option key={category._id} value={category.name}>
                    {category.name}
                  </Option>
                ))}
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <Option value="name">Name A-Z</Option>
                <Option value="price-low">Price: Low to High</Option>
                <Option value="price-high">Price: High to Low</Option>
              </Select>
            </div>
          )}
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-6">
          {filteredListings?.length === 0 ? (
            <div className="text-center py-16">
              <Icon_Factory className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No listings found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {filteredListings?.map((listing: any) => (
                <Card
                  key={listing._id}
                  className={`border-gray-300 border hover:shadow-lg transition-shadow cursor-pointer ${
                    viewMode === "list" ? "flex flex-row" : ""
                  }`}
                >
                  <div
                    className={viewMode === "list" ? "w-48 flex-shrink-0" : ""}
                  >
                    <img
                      src={listing.cover || placeholder}
                      alt={listing.title}
                      width={300}
                      height={200}
                      className={`object-cover ${
                        viewMode === "list"
                          ? "w-full h-full rounded-l-lg"
                          : "w-full h-48 rounded-t-lg"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <CardHeader className={viewMode === "list" ? "pb-2" : ""}>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">
                            {listing.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {listing.category.name}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className={viewMode === "list" ? "pt-0" : ""}>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-blue-600">
                            ${listing.price_per_hour}
                          </span>
                          <span className="text-sm text-gray-500">
                            per hour
                          </span>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Icon_Building className="h-4 w-4 mr-2 flex-shrink-0 fill-gray-400" />
                            <span className="truncate">
                              {listing.user_id.username}
                            </span>
                          </div>

                          <div className="flex items-center text-sm text-gray-600">
                            <Icon_MapPin className="h-4 w-4 mr-2 flex-shrink-0 fill-gray-400" />
                            <span>{listing.location}</span>
                          </div>
                        </div>

                        <div className="pt-2">
                          <Button
                            variant="solid"
                            className="w-full"
                            size="sm"
                            redirect={"/listing/" + listing._id}
                          >
                            View Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Market;
