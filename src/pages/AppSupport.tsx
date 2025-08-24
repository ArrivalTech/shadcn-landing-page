import { useState } from "react";
import { ArrowLeft, MessageCircle, Mail, Phone, FileText, Shield, Smartphone, Bug, Star, Clock, Globe, Users, CheckCircle, HelpCircle, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import logo from "../assets/logo.png";

export const AppSupportPage = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    app: '',
    issue: '',
    message: ''
  });

  const toggleSection = (sectionId: string) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `App Support: ${contactForm.app} - ${contactForm.issue}`;
    const body = `Name: ${contactForm.name}%0D%0AEmail: ${contactForm.email}%0D%0AApp: ${contactForm.app}%0D%0AIssue Type: ${contactForm.issue}%0D%0A%0D%0AMessage:%0D%0A${contactForm.message}`;
    window.open(`mailto:support@thearrival.tech?subject=${subject}&body=${body}`);
  };

  const apps = [
    {
      name: "Greenify",
      description: "Carbon footprint calculator and environmental impact tracker",
      version: "2.1.0",
      platforms: ["iOS", "Android"],
      status: "Active"
    },
    {
      name: "ARRIVAL Apps",
      description: "Custom mobile applications developed by ARRIVAL",
      version: "Various",
      platforms: ["iOS", "Android"],
      status: "Active"
    }
  ];

  const faqSections = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: <Smartphone className="w-6 h-6" />,
      items: [
        {
          question: "How do I download and install the app?",
          answer: "You can download our apps from the Apple App Store or Google Play Store. Search for the app name or use the direct links provided in our communications. Make sure your device meets the minimum system requirements."
        },
        {
          question: "What are the system requirements?",
          answer: "iOS: Requires iOS 12.0 or later. Compatible with iPhone, iPad, and iPod touch. Android: Requires Android 6.0 (API level 23) or higher. Minimum 2GB RAM recommended."
        },
        {
          question: "How do I create an account?",
          answer: "Open the app and tap 'Sign Up' or 'Create Account'. You can register using your email address or sign in with Apple/Google. Follow the on-screen instructions to complete your profile setup."
        }
      ]
    },
    {
      id: "account-management",
      title: "Account & Profile",
      icon: <Users className="w-6 h-6" />,
      items: [
        {
          question: "How do I reset my password?",
          answer: "On the login screen, tap 'Forgot Password'. Enter your email address and we'll send you a password reset link. Check your email (including spam folder) and follow the instructions."
        },
        {
          question: "How do I update my profile information?",
          answer: "Go to Settings > Profile or Account Settings within the app. You can update your name, email, profile picture, and other personal information. Changes are saved automatically."
        },
        {
          question: "How do I delete my account?",
          answer: "Go to Settings > Account > Delete Account. This action is permanent and will remove all your data. You can also contact our support team for assistance with account deletion."
        }
      ]
    },
    {
      id: "technical-issues",
      title: "Technical Support",
      icon: <Bug className="w-6 h-6" />,
      items: [
        {
          question: "The app crashes or won't open",
          answer: "Try these steps: 1) Force close and restart the app, 2) Restart your device, 3) Check for app updates in the App Store, 4) Ensure you have sufficient storage space, 5) If issues persist, contact our support team."
        },
        {
          question: "I'm having login issues",
          answer: "Verify your internet connection, check your email and password are correct, try resetting your password, or clear the app cache. If using social login (Apple/Google), ensure those accounts are properly configured."
        },
        {
          question: "The app is running slowly",
          answer: "Close other apps running in the background, restart your device, check available storage space, and ensure you have a stable internet connection. Consider updating to the latest app version."
        }
      ]
    },
    {
      id: "privacy-security",
      title: "Privacy & Security",
      icon: <Shield className="w-6 h-6" />,
      items: [
        {
          question: "How is my data protected?",
          answer: "We use industry-standard encryption (SSL/TLS) for data transmission and storage. Your personal information is protected according to our Privacy Policy and applicable data protection laws including GDPR and CCPA."
        },
        {
          question: "What data do you collect?",
          answer: "We collect only the data necessary to provide our services, including account information, usage data, and device information. For detailed information, please review our Privacy Policy."
        },
        {
          question: "Can I control my privacy settings?",
          answer: "Yes, go to Settings > Privacy to manage your data sharing preferences, notification settings, and other privacy controls. You can also request data deletion or export your data."
        }
      ]
    },
    {
      id: "billing-subscriptions",
      title: "Billing & Subscriptions",
      icon: <Star className="w-6 h-6" />,
      items: [
        {
          question: "How do I manage my subscription?",
          answer: "Subscriptions are managed through your Apple ID or Google Play account. Go to your device Settings > [Your Name] > Subscriptions (iOS) or Play Store > Subscriptions (Android) to view, modify, or cancel subscriptions."
        },
        {
          question: "How do I request a refund?",
          answer: "Refunds are processed through Apple or Google. For iOS: Use Apple's Report a Problem website. For Android: Request a refund through Google Play. You can also contact our support team for assistance."
        },
        {
          question: "Why was I charged?",
          answer: "Charges occur for premium features, subscriptions, or in-app purchases. Check your subscription status and purchase history in your Apple ID or Google Play account. Contact us if you see unexpected charges."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
              className="hover:bg-accent"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <img src={logo} alt="ARRIVAL Logo" className="h-8 w-auto" />
            <span className="font-semibold text-lg">App Support</span>
          </div>
          <div className="text-sm text-muted-foreground">
            24/7 Support Available
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 rounded-full bg-primary/10">
              <HelpCircle className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            App Support{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Center
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Get help with our mobile applications. Find answers to common questions, 
            troubleshoot issues, or contact our support team directly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <Globe className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Global Coverage</h3>
              <p className="text-sm text-muted-foreground">Support in multiple languages</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/50">
              <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Quick Resolution</h3>
              <p className="text-sm text-muted-foreground">Average response time: 2 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Apps Section */}
      <section className="container pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{app.name}</span>
                    <span className="text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full">
                      {app.status}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{app.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span>Version: {app.version}</span>
                    <span>Platforms: {app.platforms.join(", ")}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container pb-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqSections.map((section) => (
              <Card key={section.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleSection(section.id)}
                >
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        {section.icon}
                      </div>
                      {section.title}
                    </div>
                    <div className={`transform transition-transform ${activeSection === section.id ? 'rotate-180' : ''}`}>
                      <ArrowLeft className="w-5 h-5 rotate-90" />
                    </div>
                  </CardTitle>
                </CardHeader>
                
                {activeSection === section.id && (
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      {section.items.map((item, index) => (
                        <div key={index} className="border-l-4 border-primary/20 pl-4">
                          <h4 className="font-semibold mb-2">{item.question}</h4>
                          <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="container pb-24">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-center justify-center">
                <MessageCircle className="w-6 h-6" />
                Contact Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6 text-center">
                Can't find what you're looking for? Send us a message and we'll get back to you within 2 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">App *</label>
                    <select
                      name="app"
                      value={contactForm.app}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select an app</option>
                      <option value="Greenify">Greenify</option>
                      <option value="Custom App">Custom ARRIVAL App</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Issue Type *</label>
                    <select
                      name="issue"
                      value={contactForm.issue}
                      onChange={handleInputChange}
                      required
                      className="w-full p-2 border border-input rounded-md bg-background"
                    >
                      <option value="">Select issue type</option>
                      <option value="Technical Issue">Technical Issue</option>
                      <option value="Account Problem">Account Problem</option>
                      <option value="Billing Question">Billing Question</option>
                      <option value="Feature Request">Feature Request</option>
                      <option value="Bug Report">Bug Report</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Please describe your issue in detail. Include any error messages, steps to reproduce the problem, and your device information."
                    className="w-full p-2 border border-input rounded-md bg-background resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Support Request
                </Button>
              </form>
              
              <div className="mt-8 pt-6 border-t">
                <h3 className="font-semibold mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email Support</p>
                      <a href="mailto:support@thearrival.tech" className="text-primary hover:underline">
                        support@thearrival.tech
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">WhatsApp Support</p>
                      <a href="https://wa.me/573215086797?text=Hello%20ARRIVAL,%20I%20need%20help%20with%20your%20mobile%20app" 
                         target="_blank" 
                         rel="noopener noreferrer" 
                         className="text-primary hover:underline">
                        +57 321 508-6797
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Apple Compliance Footer */}
      <section className="bg-muted/30 py-12">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Apple App Store Compliance</h3>
            <p className="text-muted-foreground">
              This support page complies with Apple App Store guidelines and provides comprehensive assistance for our mobile applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-medium mb-2">Terms of Service</h4>
              <p className="text-sm text-muted-foreground">
                Review our complete terms and conditions
              </p>
            </div>
            <div>
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-medium mb-2">Privacy Policy</h4>
              <p className="text-sm text-muted-foreground">
                Learn how we protect your data
              </p>
            </div>
            <div>
              <Settings className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-medium mb-2">App Settings</h4>
              <p className="text-sm text-muted-foreground">
                Manage your app preferences and permissions
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-background rounded-lg border">
            <h4 className="font-semibold mb-3">Developer Information</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p><strong>Company:</strong> ARRIVAL SAS</p>
              <p><strong>NIT:</strong> 901.893.131-6</p>
              <p><strong>Address:</strong> Cra. 13 #85-39, Oficina 705, Bogotá D.C., Colombia</p>
              <p><strong>Support Email:</strong> support@thearrival.tech</p>
              <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (COT)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};