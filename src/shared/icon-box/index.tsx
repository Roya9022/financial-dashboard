interface IconBoxProps {
  src?: string;
  fallbackText?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconBox: React.FC<IconBoxProps> = ({
  src,
  fallbackText,
  size = 'md',
  className = '',
}: IconBoxProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 overflow-hidden ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={fallbackText}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-xs font-bold">
          {fallbackText?.substring(0, 1)}
        </span>
      )}
    </div>
  );
};
export default IconBox;
