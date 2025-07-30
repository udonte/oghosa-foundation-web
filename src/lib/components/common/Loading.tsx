import { useState, useEffect } from "react";

type LoadingProps = {
  type?: "spinner" | "pulse" | "dots" | "bars" | "skeleton";
  size?: "sm" | "md" | "lg" | "xl";
  color?: "primary" | "secondary" | "light" | "dark" | "custom";
  customColor?: string;
  fullScreen?: boolean;
  message?: string;
  className?: string;
};

const Loading = ({
  type = "spinner",
  size = "md",
  color = "primary",
  customColor = "",
  fullScreen = false,
  message = "",
  className = "",
}: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  // Simulate progress for bar type
  useEffect(() => {
    if (type === "bars") {
      const interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
      }, 300);
      return () => clearInterval(interval);
    }
  }, [type]);

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  const colorClasses = {
    primary: "text-oghosa-gold",
    secondary: "text-oghosa-green",
    light: "text-white",
    dark: "text-gray-800",
    custom: customColor,
  };

  const renderLoader = () => {
    switch (type) {
      case "spinner":
        return (
          <div
            className={`animate-spin rounded-full border-b-2 border-t-2 ${sizeClasses[size]} ${colorClasses[color]} border-oghosa-gold`}
          ></div>
        );
      case "pulse":
        return (
          <div className="flex space-x-2">
            <div
              className={`animate-pulse rounded-full ${sizeClasses[size]} ${colorClasses[color]} bg-current opacity-0`}
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className={`animate-pulse rounded-full ${sizeClasses[size]} ${colorClasses[color]} bg-current opacity-0`}
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className={`animate-pulse rounded-full ${sizeClasses[size]} ${colorClasses[color]} bg-current opacity-0`}
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        );
      case "dots":
        return (
          <div className="flex space-x-2">
            <div
              className={`animate-bounce ${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className={`animate-bounce ${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className={`animate-bounce ${sizeClasses[size]} ${colorClasses[color]} bg-current rounded-full`}
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        );
      case "bars":
        return (
          <div className={`w-full ${sizeClasses[size]}`}>
            <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${colorClasses[color]} bg-current transition-all duration-300 ease-out`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        );
      case "skeleton":
        return (
          <div className="animate-pulse flex flex-col w-full">
            <div
              className={`rounded-md ${colorClasses[color]} bg-opacity-20 ${sizeClasses[size]}`}
            ></div>
          </div>
        );
      default:
        return (
          <div
            className={`animate-spin rounded-full border-b-2 border-t-2 ${sizeClasses[size]} ${colorClasses[color]} border-transparent`}
          ></div>
        );
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen
          ? "fixed inset-0 h-screen w-screen bg-white bg-opacity-90 z-50"
          : ""
      } ${className}`}
    >
      {renderLoader()}
      {message && (
        <p
          className={`mt-4 text-center ${
            color === "light" ? "text-white" : "text-gray-600"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Loading;
