
const SIZE = {
    sm: "p-2 text-base xs:px-4",
    md: "p-3 text-base xs:px-8",
    lg: "p-3 text-lg xs:px-8"
  }
  
  
  
  export default function Button({
    children,
    className,
    size = "md",
    hoverable = true,
    variant = "purple",
    ...rest
  }) {
  
    const sizeClass = SIZE[size]
    const variants = {
      white: `text-black bg-white`,
      green: `text-polygonPurple-default border-polygonPurple-default ${hoverable && "hover:bg-polygonPurple-default hover:text-white-default"}`,
      gold: `text-polygonBlack-default border-polygonBlack-default ${hoverable && "hover:bg-polygonBlack-default hover:text-white-default"}`,
      purple: `text-white bg-indigo-600 ${hoverable && "hover:bg-indigo-700"}`,
      lightPurple: `text-indigo-700 bg-indigo-100 ${hoverable && "hover:bg-indigo-200"}`,
    }

    return (
      <button
        {...rest}
        className={`${sizeClass} disabled:opacity-50 disabled:cursor-not-allowed border rounded-sm font-jost font-medium ${className} ${variants[variant]}`}>
        {children}
      </button>
    )
  }
  