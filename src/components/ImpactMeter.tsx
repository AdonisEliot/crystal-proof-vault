import { TrendingUp, Users, Heart } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const ImpactMeter = () => {
  return (
    <footer className="border-t border-glass-border bg-gradient-glass backdrop-blur-xl">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Global Impact
          </h3>
          <p className="text-muted-foreground">Anonymous giving, transparent impact</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-glass-border">
            <Heart className="h-8 w-8 text-primary" />
            <p className="text-3xl font-bold text-foreground">$2.4M</p>
            <p className="text-sm text-muted-foreground">Total Donated</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-glass-border">
            <Users className="h-8 w-8 text-secondary" />
            <p className="text-3xl font-bold text-foreground">5,847</p>
            <p className="text-sm text-muted-foreground">Anonymous Donors</p>
          </div>

          <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-glass-border">
            <TrendingUp className="h-8 w-8 text-accent" />
            <p className="text-3xl font-bold text-foreground">127</p>
            <p className="text-sm text-muted-foreground">Projects Funded</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Monthly Goal Progress</span>
            <span className="font-semibold text-primary">73%</span>
          </div>
          <Progress value={73} className="h-2" />
        </div>

        <div className="text-center mt-8 text-xs text-muted-foreground">
          <p>© 2024 CharityVault. All donations secured with zero-knowledge proofs.</p>
        </div>
      </div>
    </footer>
  );
};
