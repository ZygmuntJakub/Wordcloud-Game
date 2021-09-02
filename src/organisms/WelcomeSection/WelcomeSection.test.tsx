import { fireEvent, render } from "@testing-library/react";
import store from "utils/store";
import { Provider } from "react-redux";
import WelcomeSection from "./WelcomeSection";

describe("WelcomeSection tests", () => {
    test("Should disable play button with empty input", async () => {
        // Given
        const { findByText } = render(
            <Provider store={store}>
                <WelcomeSection />
            </Provider>
        );

        const button = await findByText("play");

        // When

        // Then

        expect(button).toBeDisabled();
    });

    test("Should enable play button with typed input", async () => {
        // Given
        const { findByText, findByTestId } = render(
            <Provider store={store}>
                <WelcomeSection />
            </Provider>
        );

        const button = await findByText("play");
        const input = await findByTestId("nickname-input");

        // When
        fireEvent.change(input, { target: { value: "Player" } });

        // Then
        expect(button).not.toBeDisabled();
    });
});
