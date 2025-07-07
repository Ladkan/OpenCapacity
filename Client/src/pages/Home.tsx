import Badge from "../lib/ui/Badge";
import Button from "../lib/ui/Button";
import {
  Icon_ArrowRight,
  Icon_BarChart,
  Icon_Building,
  Icon_Dollar,
  Icon_Factory,
  Icon_Globe,
  Icon_Shield,
  Icon_TimeReduce,
} from "../lib/utils/icons";
import placeholder from "../assets/placeholder.svg";
import { Card, CardDescription, CardHeader, CardTitle } from "../lib/ui/Card";

function Home() {
  return (
    <>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="w-fit">
                  🚀 Now in Beta - Join Early Access
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Unlock Hidden Value in Your{" "}
                  <span className="text-blue-600">Machine Capacity</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect businesses with unused manufacturing capacity to those
                  who need it. Maximize utilization, reduce costs, and
                  accelerate production timelines.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="solid"
                  redirect="/market/add"
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  List Your Machines
                  <Icon_ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Active Machines</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">150+</div>
                  <div className="text-sm text-gray-600">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">$2M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={placeholder}
                  width={800}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  alt=""
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-indigo-200 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose OpenCapacity?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform bridges the gap between unused manufacturing capacity
              and production demand, creating value for both machine owners and
              renters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon_Dollar className="h-6 w-6 fill-blue-600" />
                </div>
                <CardTitle>Maximum Revenue</CardTitle>
                <CardDescription>
                  Turn idle machines into profit centers. Earn up to 40%
                  additional revenue from unused capacity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon_TimeReduce className="h-6 w-6 fill-green-600" />
                </div>
                <CardTitle>Reduce Lead Times</CardTitle>
                <CardDescription>
                  Access available capacity instantly. Reduce production lead
                  times by up to 60%.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon_BarChart className="h-6 w-6 fill-purple-600" />
                </div>
                <CardTitle>Smart Matching</CardTitle>
                <CardDescription>
                  AI-powered algorithms match your requirements with the perfect
                  machine capacity.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon_Shield className="h-6 w-6 fill-orange-600" />
                </div>
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  Verified partners, quality standards, and comprehensive
                  insurance coverage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon_Globe className="h-6 w-6 fill-red-600" />
                </div>
                <CardTitle>Global Network</CardTitle>
                <CardDescription>
                  Access manufacturing capacity across 25+ countries and 500+
                  verified facilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon_Globe className="h-6 w-6 fill-teal-600" />
                </div>
                <CardTitle>End-to-End Support</CardTitle>
                <CardDescription>
                  From initial matching to final delivery, our team supports
                  every step of the process.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
      <section id="howitworks" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How OpenCapacity Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, secure, and efficient process for both capacity providers
              and seekers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Icon_Factory className="mr-3 h-6 w-6 fill-blue-600" />
                For Machine Owners
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "List Your Capacity",
                    description:
                      "Upload machine specifications, availability, and pricing in minutes.",
                  },
                  {
                    step: "2",
                    title: "Get Matched",
                    description:
                      "Our AI connects you with verified businesses needing your specific capacity.",
                  },
                  {
                    step: "3",
                    title: "Secure Contracts",
                    description:
                      "Negotiate terms, sign digital contracts, and get payment guarantees.",
                  },
                  {
                    step: "4",
                    title: "Earn Revenue",
                    description:
                      "Receive payments automatically as work is completed and verified.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <Icon_Building className="mr-3 h-6 w-6 fill-green-600" />
                For Capacity Seekers
              </h3>
              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Define Requirements",
                    description:
                      "Specify your production needs, timeline, quality standards, and budget.",
                  },
                  {
                    step: "2",
                    title: "Browse Options",
                    description:
                      "View matched capacity providers with ratings, certifications, and availability.",
                  },
                  {
                    step: "3",
                    title: "Book Capacity",
                    description:
                      "Select providers, negotiate terms, and secure your production slots.",
                  },
                  {
                    step: "4",
                    title: "Track Progress",
                    description:
                      "Monitor production in real-time with quality checkpoints and delivery updates.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Average Capacity Utilization</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">48hrs</div>
              <div className="text-blue-100">Average Matching Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.2%</div>
              <div className="text-blue-100">On-Time Delivery Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-blue-100">Average Customer Rating</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-t border-gray-500">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Updated on Manufacturing Trends
            </h3>
            <p className="text-gray-600 mb-6">
              Get insights on capacity optimization, industry trends, and
              platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
              />
              <Button size="md" variant="solid" action={() => null}>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
