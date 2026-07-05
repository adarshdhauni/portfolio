import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../errorFallback/ErrorFallback";

const ErrorBoundary = ({ children }) => {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
