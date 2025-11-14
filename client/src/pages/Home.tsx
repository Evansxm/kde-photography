import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, MapPin, Users, Award, ChevronDown, Mail, Phone } from "lucide-react";
import { APP_LOGO, APP_TITLE } from "@/const";
import { useRef } from "react";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Camera className="w-8 h-8 text-amber-600" />
            <h1 className="text-2xl font-bold text-gray-900">KDE Photography</h1>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection(servicesRef)} className="text-gray-700 hover:text-amber-600 transition">
              Services
            </button>
            <button onClick={() => scrollToSection(pricingRef)} className="text-gray-700 hover:text-amber-600 transition">
              Pricing
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="text-gray-700 hover:text-amber-600 transition">
              Contact
            </button>
          </nav>
          <Button onClick={() => scrollToSection(contactRef)} className="bg-amber-600 hover:bg-amber-700">
            Book Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Capture Your Precious Moments
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Professional photography services in Tshwane, Gauteng. From family portraits to school photography packages, we deliver stunning images that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => scrollToSection(contactRef)} size="lg" className="bg-amber-600 hover:bg-amber-700">
                Get in Touch
              </Button>
              <Button onClick={() => scrollToSection(pricingRef)} size="lg" variant="outline">
                View Pricing
              </Button>
            </div>
            <div className="mt-12 flex justify-center">
              <ChevronDown className="w-8 h-8 text-amber-600 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <CardTitle>Serving Tshwane</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Based in Danville, we cover the entire Tshwane metropolitan area with professional photography services.
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <Award className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <CardTitle>Professional Quality</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                High-resolution edited images delivered promptly with professional attention to detail and lighting.
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <CardTitle>Client Focused</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                We listen to your needs and deliver images that exceed expectations for every occasion.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Services</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Camera className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>Portrait & Family Photography</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Professional portraits for individuals, families, couples, and high school seniors. Includes multiple outfit changes and location options.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>School Photography Packages</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Specialized school photo days with individual and class portraits. Parent-friendly online ordering system with multiple print options.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>Commercial & Branding</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Business headshots, product photography, and branding sessions for local businesses. Perfect for websites and marketing materials.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Camera className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>Event Coverage</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Professional coverage of school events, corporate gatherings, and special occasions. Comprehensive documentation with edited images.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Pricing Packages</h3>
          
          {/* General Packages */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Portrait & Family Sessions</h4>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Mini Session</CardTitle>
                  <CardDescription>Quick & Affordable</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-amber-600">R850</span>
                    <span className="text-gray-600"> - R1,200</span>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>✓ 30 minutes session</li>
                    <li>✓ 10 edited images</li>
                    <li>✓ Online gallery</li>
                    <li>✓ 1 outfit change</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-600 relative">
                <div className="absolute -top-3 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle>Standard Session</CardTitle>
                  <CardDescription>Best Value</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-amber-600">R1,500</span>
                    <span className="text-gray-600"> - R2,500</span>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>✓ 60-90 minutes session</li>
                    <li>✓ 25 edited images</li>
                    <li>✓ Online gallery</li>
                    <li>✓ 2 outfit changes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Premium Session</CardTitle>
                  <CardDescription>Comprehensive Coverage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-amber-600">R3,000</span>
                    <span className="text-gray-600"> - R4,500</span>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li>✓ Up to 2 hours</li>
                    <li>✓ 50+ edited images</li>
                    <li>✓ Online gallery</li>
                    <li>✓ 2-3 outfit changes</li>
                    <li>✓ 1 large print (A4)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* School's Package */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-8 mb-8">
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">School's Photography Package</h4>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">School Session Fee</h5>
                <Card className="border-0 bg-white">
                  <CardContent className="pt-6">
                    <div className="mb-4">
                      <p className="font-semibold text-amber-600">Annual School Photo Day</p>
                      <p className="text-2xl font-bold text-gray-900">R1,500 - R3,000</p>
                      <p className="text-sm text-gray-600 mt-2">Professional setup, lighting, and photography of all learners (individual and class photos)</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="font-semibold text-amber-600">Event Coverage</p>
                      <p className="text-2xl font-bold text-gray-900">R800 - R1,200/hour</p>
                      <p className="text-sm text-gray-600 mt-2">Sports days, graduations, concerts, and other school events</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Parent Purchase Options</h5>
                <div className="space-y-4">
                  <Card className="border-0 bg-white">
                    <CardContent className="pt-6">
                      <p className="font-semibold text-amber-600">Digital Only</p>
                      <p className="text-2xl font-bold text-gray-900">R150 - R250</p>
                      <p className="text-sm text-gray-600 mt-2">5 high-resolution digital images</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-white">
                    <CardContent className="pt-6">
                      <p className="font-semibold text-amber-600">Print Starter</p>
                      <p className="text-2xl font-bold text-gray-900">R200 - R350</p>
                      <p className="text-sm text-gray-600 mt-2">1 large print (A4), 2 medium (A5), 4 wallet-sized</p>
                    </CardContent>
                  </Card>
                  <Card className="border-0 bg-white">
                    <CardContent className="pt-6">
                      <p className="font-semibold text-amber-600">Ultimate Combo</p>
                      <p className="text-2xl font-bold text-gray-900">R400 - R600</p>
                      <p className="text-sm text-gray-600 mt-2">All digital images + Print Starter + Class photo</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600 mt-6">Schools receive 10-15% commission on all parent purchases</p>
          </div>

          {/* Additional Info */}
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <p className="text-gray-700">
              <span className="font-semibold">Travel Fee:</span> R5.00 - R8.00 per km for locations outside 20km radius of Danville, Tshwane
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Get in Touch</h3>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Ready to Book Your Session?</CardTitle>
                <CardDescription>Contact us today for inquiries, bookings, or custom packages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">Contact us for availability and booking</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">inquiry@kdephotography.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-amber-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Location</p>
                      <p className="text-gray-600">Danville, Tshwane, Gauteng, South Africa</p>
                    </div>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 mt-6">
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Camera className="w-6 h-6 text-amber-600" />
                <h4 className="text-lg font-bold">KDE Photography</h4>
              </div>
              <p className="text-gray-400">Professional photography services in Tshwane, Gauteng, South Africa.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-600 transition">Portrait Photography</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">School Packages</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Commercial Photography</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Event Coverage</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">Danville, Tshwane</p>
              <p className="text-gray-400 mb-2">Gauteng, South Africa</p>
              <p className="text-amber-600">inquiry@kdephotography.co.za</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 KDE Photography. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
