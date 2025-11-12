import { Wallet, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useWallet } from "@/hooks/useWallet";

export const WalletConnect = () => {
  const { toast } = useToast();
  const { isConnected, address, connect, disconnect } = useWallet();

  const handleConnect = async () => {
    try {
      await connect();
      toast({
        title: "Wallet Connected",
        description: "Your Rainbow Wallet has been connected successfully.",
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Unable to connect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDisconnect = () => {
    disconnect();
    toast({
      title: "Wallet Disconnected",
      description: "Your wallet has been disconnected.",
    });
  };

  if (isConnected) {
    return (
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-foreground hidden sm:inline">
          {address}
        </span>
        <Button 
          onClick={handleDisconnect}
          variant="outline"
          className="border-glass-border bg-glass-bg/50 backdrop-blur-sm hover:bg-glass-bg/80"
        >
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </Button>
      </div>
    );
  }

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
