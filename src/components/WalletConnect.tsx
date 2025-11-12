import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export const WalletConnect = () => {
  const { toast } = useToast();

  const handleConnect = () => {
    toast({
      title: "Rainbow Wallet Required",
      description: "Please install Rainbow Wallet to generate zero-knowledge proofs for your donations.",
    });
  };

  return (
    <Button 
      onClick={handleConnect}
      className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-crystal"
    >
      <Wallet className="mr-2 h-4 w-4" />
      Connect Rainbow Wallet
    </Button>
  );
};
