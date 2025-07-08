import { Link, useParams } from "react-router-dom";
import { getListing } from "../lib/query/listings.queryOptions";
import { useQuery } from "@tanstack/react-query";
import { getDetail } from "../lib/query/details.queryOptions";
import placeholder from "../assets/placeholder.svg";
import { Card, CardContent, CardHeader, CardTitle } from "../lib/ui/Card";
import Badge from "../lib/ui/Badge";
import {
  Icon_Building,
  Icon_Calendar,
  Icon_MapPin,
  Icon_Shield,
} from "../lib/utils/icons";
import { FormatDate } from "../lib/utils";
import { Tab, TabContent, TabList, TabTrigger } from "../lib/ui/Tabs";
import { useState } from "react";
import Separator from "../lib/ui/Separator";
import Button from "../lib/ui/Button";
import { Modal, ModalBottom } from "../lib/components/Modal";
import { useGetUser } from "../lib/auth/auth.hooks";

function Listing() {
  const { data: user } = useGetUser();
  const { id } = useParams();
  const { data: listing } = useQuery(getListing(id));
  const { data: details } = useQuery(getDetail(id));
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState("specifications");

  const handleBooking = () => {

  }

  return (
    <>
      <Modal active={modal} >
        4
        <ModalBottom>
            <Button size="md" variant="outline" action={() => setModal(!modal)} >Cancel</Button>
            <Button size="md" variant="solid" action={() => handleBooking} >Book now</Button>
        </ModalBottom>
      </Modal>
      <div className="bg-gray-50">
        <div className="bg-white border-b border-gray-200">
          <div className="container mx-auto px-4 lg:px-6 py-3">
            <nav className="text-sm text-gray-600">
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/market" className="hover:text-gray-900">
                Market
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">{listing?.data.title}</span>
            </nav>
          </div>
        </div>

        <section className="container mx-auto px-4 lg:px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card className="border border-gray-200 rounded-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-3 gap-4 p-6">
                    <div className="md:col-span-3">
                      <img
                        src={listing?.data.cover || placeholder}
                        alt={listing?.data.title}
                        width={800}
                        height={600}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 rounded-lg">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {listing?.data.title}
                      </CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <Badge>{listing?.data.category.name}</Badge>
                        <div className="flex items-center">
                          <Icon_Building className="h-4 w-4 mr-l fill-gray-400" />
                          {listing?.data.user_id.username}
                        </div>
                        <div className="flex items-center">
                          <Icon_MapPin className="h-4 w-4 mr-1 fill-gray-400" />
                          {listing?.data.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center">
                      <Icon_Calendar className="w-4 h-4 mr-1 fill-gray-400" />
                      <span>
                        From: {FormatDate(listing?.data.available_from)}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Icon_Calendar className="w-4 h-4 mr-1 fill-gray-400" />
                      <span>To: {FormatDate(listing?.data.available_to)}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6">
                    {listing?.data.description}
                  </p>
                  <Tab className="w-full">
                    <TabList className="grid w-full grid-cols-2">
                      <TabTrigger
                        value="specifications"
                        active={activeTab}
                        setActive={setActiveTab}
                      />
                      <TabTrigger
                        value="materials"
                        active={activeTab}
                        setActive={setActiveTab}
                      />
                    </TabList>
                    <TabContent value="specifications" active={activeTab}>
                      <div className="grid md:grid-cols-2 gap-4">
                        {details?.data?.specs.map((item: any) => (
                          <div
                            key={item.name}
                            className="flex justify-between py-2 border-b border-gray-100"
                          >
                            <span className="text-gray-600">{item.name}:</span>
                            <span className="text-gray-900">
                              {item.content}
                            </span>
                          </div>
                        ))}
                      </div>
                    </TabContent>
                    <TabContent value="materials" active={activeTab}>
                      <div className="flex flex-wrap gap-2">
                        {details?.data?.materials.map((item: any) => (
                          <Badge key={item} className="text-sm">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </TabContent>
                  </Tab>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 rounded-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon_Building className="h-5 w-5 fill-gray-500" />
                    About {listing?.data.user_id.username}
                  </CardTitle>
                  <CardContent>
                    <p className="text-gray-700 mb-6">
                      {listing?.data.user_id.about}
                    </p>

                    <div className="grid md:grid-cols-1 gap-6">
                      <div>
                        <h5>Certifications</h5>
                        <div className="flex flex-wrap gap-2">
                          {listing?.data.user_id?.certifications?.map((item) => (
                            <Badge key={item} className="text-sx">
                              <Icon_Shield className="h-3 w-3 mr-1 fill-gray-400" />
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CardHeader>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="border border-gray-200 rounded-lg top-24">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">
                        ${listing?.data.price_per_hour}
                      </div>
                      <span className="text-sm text-gray-600">per hour</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Pricing Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Setup Fee:</span>
                          <span>${details?.data?.setup_fee || 0}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Rush Order:</span>
                          <span>+{details?.data?.rush_order_fee || 0}%</span>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <h4 className="font-medium mb-2">Volume Discounts</h4>
                      <div className="space-y-1 text-sm">
                        {details?.data?.volume_discounts?.map((item: any) => (
                          <div
                            key={item.index}
                            className="flex justify-between text-green-600"
                          >
                            <span>{item.hours}+ hours:</span>
                            <span>{item.discount}% off</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      {user && <Button
                        size="md"
                        variant="solid"
                        className="w-full"
                        action={() => setModal(!modal)}
                      >
                        <Icon_Calendar className="mr-2 h-4 w-4" />
                        Request Booking
                      </Button>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Listing;
