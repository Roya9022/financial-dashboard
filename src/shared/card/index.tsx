const Card: React.FC<{ children?: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`bg-bg-secondary border border-border-default rounded-3xl p-4 transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
};
export default Card;
