import { render } from "@testing-library/react";

export const renderComponentFactory = (component: React.ReactNode) => {
  return render(component);
};
