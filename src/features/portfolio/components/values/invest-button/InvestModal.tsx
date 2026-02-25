import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Button } from '@/shared';

interface InvestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestModal = ({ isOpen, onClose }: InvestModalProps) => {
  const [amount, setAmount] = useState<string>('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newAmount: number) => {
      console.log('Investing:', newAmount);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['portfolioSummary'] });
      onClose();
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80 space-y-4">
        <h3 className="font-bold text-lg">Invest Funds</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 border rounded-md outline-none focus:ring-2 ring-brand"
        />
        <div className="flex gap-2">
          <Button variant="outline" onClick={onClose} className="flex-1">
            Cancel
          </Button>
          <Button
            onClick={() => mutation.mutate(Number(amount))}
            disabled={mutation.isPending}
            className="flex-1"
          >
            {mutation.isPending ? 'Processing...' : 'Confirm'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InvestModal;
