import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/hooks/useWallet";
import { Shield, CheckCircle } from "lucide-react";

interface DonationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const DonationDialog = ({ open, onOpenChange }: DonationDialogProps) => {
  const [amount, setAmount] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { isConnected, address } = useWallet();

  const handleDonate = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate donation processing with ZK proof generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const proofId = `0x${Math.random().toString(16).slice(2, 6)}...${Math.random().toString(16).slice(2, 6)}`;
    
    toast({
      title: "Donation Successful!",
      description: `Your donation has been encrypted and verified. Proof ID: ${proofId}`,
    });
    
    setIsProcessing(false);
    setAmount("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-glass backdrop-blur-xl border-glass-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            Make Anonymous Donation
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Your donation will be encrypted using zero-knowledge proofs to maintain complete anonymity.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {isConnected && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Connected: {address}</span>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="amount">Donation Amount (ETH)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-background/50 border-glass-border"
            />
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-card/30 border border-glass-border space-y-2">
              <h4 className="font-semibold text-sm">Privacy Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>✓ Zero-knowledge proof generation</li>
                <li>✓ Amount encrypted on-chain</li>
                <li>✓ Anonymous donor verification</li>
              </ul>
            </div>
          </div>

          <Button 
            onClick={handleDonate}
            disabled={!isConnected || isProcessing}
            className="w-full bg-gradient-primary hover:opacity-90 transition-opacity shadow-crystal"
          >
            {isProcessing ? "Processing..." : "Submit Encrypted Donation"}
          </Button>

          {!isConnected && (
            <p className="text-sm text-center text-muted-foreground">
              Please connect your wallet first
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
