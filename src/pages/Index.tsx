import { Shield, Lock, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DonationTile } from "@/components/DonationTile";
import { ImpactMeter } from "@/components/ImpactMeter";
import { WalletConnect } from "@/components/WalletConnect";
import logo from "@/assets/logo.png";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const sampleDonations = [
    {
      amount: "***.**",
      timestamp: "2 hours ago",
      verified: true,
      proofId: "0x7a8f...3d2e",
    },
    {
      amount: "***.**",
      timestamp: "5 hours ago",
      verified: true,
      proofId: "0x9b4c...7f1a",
    },
    {
      amount: "***.**",
      timestamp: "1 day ago",
      verified: true,
      proofId: "0x2e5d...8c9b",
    },
    {
      amount: "***.**",
      timestamp: "2 days ago",
      verified: true,
      proofId: "0x6f3a...1d4e",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Navigation */}
      <nav className="border-b border-glass-border bg-gradient-glass backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CharityVault" className="h-10 w-10" />
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                CharityVault
              </span>
            </div>
            <WalletConnect />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-glass backdrop-blur-xl border border-glass-border shadow-glass">
                <Shield className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  Secured by Zero-Knowledge Proofs
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Give Anonymously,
              </span>
              <br />
              <span className="text-foreground">Verify Publicly</span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Submit encrypted donation records while maintaining complete anonymity.
              Transparency through cryptographic proof, privacy through design.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-crystal">
                Start Donating
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-glass-border bg-glass-bg/50 backdrop-blur-sm hover:bg-glass-bg/80">
                Learn More
                <Eye className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-glass backdrop-blur-xl">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-glass-border hover:shadow-glass transition-all duration-500">
              <div className="inline-block p-4 rounded-full bg-primary/10">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Full Anonymity</h3>
              <p className="text-muted-foreground">
                Your identity remains completely private while donations are cryptographically verified
              </p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-glass-border hover:shadow-glass transition-all duration-500">
              <div className="inline-block p-4 rounded-full bg-secondary/10">
                <Shield className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">ZK Proofs</h3>
              <p className="text-muted-foreground">
                Zero-knowledge cryptography ensures transparency without compromising privacy
              </p>
            </div>

            <div className="text-center space-y-3 p-6 rounded-2xl bg-card/30 backdrop-blur-sm border border-glass-border hover:shadow-glass transition-all duration-500">
              <div className="inline-block p-4 rounded-full bg-accent/10">
                <Heart className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Verified Impact</h3>
              <p className="text-muted-foreground">
                Track real-world impact with publicly verifiable donation records
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Dashboard */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Recent Verified Donations
              </h2>
              <p className="text-muted-foreground">
                All donations are encrypted and verified using zero-knowledge proofs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sampleDonations.map((donation, index) => (
                <DonationTile key={index} {...donation} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Meter Footer */}
      <ImpactMeter />
    </div>
  );
};

export default Index;
