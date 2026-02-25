import { useState } from 'react';
import { Button } from '@/shared';
import { X } from 'lucide-react';

interface InvestProps {
  onInvest: (amount: number) => void;
}

const InvestButton: React.FC<InvestProps> = ({ onInvest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    const numAmount = parseFloat(amount);
    if (!isNaN(numAmount)) {
      onInvest(numAmount);
      setAmount('');
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setAmount('');
    setIsOpen(false);
  };

  return (
    <>
      <Button
        size="sm"
        className="w-30 h-10 text-[12px] rounded-2xl border py-3.5"
        variant="text"
        onClick={() => setIsOpen(true)}
      >
        Invest
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white dark:bg-bg-primary p-6 rounded-2xl shadow-2xl w-full max-w-sm border border-border-default">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Add to Portfolio</h3>
              <button
                onClick={handleClose}
                className="text-text-secondary hover:text-text-primary transition-colors outline-none cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>
            <input
              type="number"
              autoFocus
              className="w-full p-3 rounded-lg border border-border-default bg-transparent mb-6 outline-none focus:ring-2 ring-brand"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className="flex-1" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InvestButton;
