import { Shield, Lock, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DonationTileProps {
  amount: string;
  timestamp: string;
  verified: boolean;
  proofId: string;
}

export const DonationTile = ({ amount, timestamp, verified, proofId }: DonationTileProps) => {
  return (
    <Card className="group relative overflow-hidden bg-gradient-glass backdrop-blur-xl border-glass-border shadow-glass hover:shadow-crystal transition-all duration-500 hover:scale-[1.02]">
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-crystal-shimmer/0 via-crystal-shimmer/10 to-crystal-shimmer/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative p-6 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 backdrop-blur-sm">
              <Lock className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Encrypted Amount</p>
              <p className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {amount}
              </p>
            </div>
          </div>
          {verified && (
            <Badge className="bg-accent/20 text-accent border-accent/30 backdrop-blur-sm">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Verified
            </Badge>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Zero-Knowledge Proof</span>
          </div>
          <p className="text-xs font-mono text-muted-foreground/70 truncate">
            {proofId}
          </p>
        </div>

        <div className="pt-3 border-t border-glass-border">
          <p className="text-xs text-muted-foreground">{timestamp}</p>
        </div>
      </div>
    </Card>
  );
};
