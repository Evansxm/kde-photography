import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, MapPin, Users, Award, ChevronDown, Mail, Phone, Zap, Gift } from "lucide-react";
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
              Capture Your Child's Smile
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Professional school and family photography in Tshwane. Quality photos at prices parents love. Serving Danville and all of Tshwane with professional, affordable photography.
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose KDE Photography?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <Zap className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <CardTitle>Best Value in Tshwane</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Professional quality photos at R280-R350. We deliver premium results at mid-range prices, beating budget competitors on quality and premium studios on value.
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <MapPin className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <CardTitle>Local Advantage</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Based in Danville, Tshwane. Fast turnaround, minimal travel delays, and we understand your community's needs.
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader className="text-center">
                <Gift className="w-8 h-8 text-amber-600 mx-auto mb-4" />
                <CardTitle>Custom Keyrings & Branding</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                Every package includes a custom photo keyring with your child's image. Branded packaging makes memories last forever.
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
                <CardTitle>School Photography</CardTitle>
                <CardDescription>Our Specialty</CardDescription>
              </CardHeader>
              <CardContent className="text-gray-700">
                Professional school photo days for ECD, primary, and high schools. Individual portraits, class photos, and custom keyrings. We work with schools to offer commission opportunities (10-15% of sales) while delivering quality that parents love.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>Family & Portrait Photography</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Professional family portraits, individual headshots, and personal branding sessions. Multiple outfit changes, location flexibility, and high-resolution edited images delivered promptly.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Award className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>Event Coverage</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Sports days, graduation ceremonies, school events, and corporate gatherings. Professional documentation with edited images delivered within 2-3 weeks.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Camera className="w-8 h-8 text-amber-600 mb-4" />
                <CardTitle>Commercial & Branding</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700">
                Business headshots, product photography, and branding sessions for local Tshwane businesses. Perfect for websites, social media, and marketing materials.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-4xl font-bold text-center text-gray-900 mb-12">Pricing Packages</h3>
          
          {/* KDE Kids Memory Package - Featured */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-gray-900 mb-8 text-center">KDE Kids Memory Package - School Photography</h4>
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-amber-600 relative">
                <div className="absolute -top-3 left-4 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular - Best Value
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl">R280 - R350</CardTitle>
                  <CardDescription>Perfect for schools, ECD, and families</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">What's Included:</h5>
                      <ul className="space-y-2 text-gray-700">
                        <li>✓ 2 professional printed photos (A5 + wallet size)</li>
                        <li>✓ Custom photo keyring with child's image</li>
                        <li>✓ Branded presentation envelope</li>
                        <li>✓ Digital proof sheet (online gallery access)</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Tiered Options:</h5>
                      <div className="space-y-2 text-sm text-gray-700">
                        <p><span className="font-semibold">Starter (R280):</span> 2 prints + keyring + envelope</p>
                        <p><span className="font-semibold">Standard (R315):</span> Starter + digital download + class photo</p>
                        <p><span className="font-semibold">Premium (R350):</span> Standard + A4 print + gift box</p>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-gray-900 mb-2">Add-Ons:</h5>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Digital copy only: +R50</li>
                        <li>• Class photo print: +R30</li>
                        <li>• Additional keyring: +R25</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Volume Discounts */}
            <div className="mt-8 bg-green-50 rounded-lg p-6">
              <h5 className="text-lg font-semibold text-gray-900 mb-4 text-center">School Bulk Discounts</h5>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">50-100 Students</p>
                  <p className="text-2xl font-bold text-green-600">5% Off</p>
                  <p className="text-sm text-gray-600">R266 - R332</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">100-250 Students</p>
                  <p className="text-2xl font-bold text-green-600">10% Off</p>
                  <p className="text-sm text-gray-600">R252 - R315</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">250+ Students</p>
                  <p className="text-2xl font-bold text-green-600">15% Off</p>
                  <p className="text-sm text-gray-600">R238 - R297</p>
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                <span className="font-semibold">Schools earn 10-15% commission</span> on all parent purchases
              </p>
            </div>
          </div>

          {/* General Photography Packages */}
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

              <Card className="border-2 border-gray-200">
                <CardHeader>
                  <CardTitle>Standard Session</CardTitle>
                  <CardDescription>Most Popular</CardDescription>
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
                  <CardDescription>Comprehensive</CardDescription>
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
                <CardDescription>Contact us today for school bookings, family sessions, or custom packages</CardDescription>
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
              <p className="text-gray-400">Professional photography services in Tshwane, Gauteng, South Africa. Specializing in school photography and family portraits.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-amber-600 transition">School Photography</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Family Portraits</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Event Coverage</a></li>
                <li><a href="#" className="hover:text-amber-600 transition">Commercial Photography</a></li>
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
