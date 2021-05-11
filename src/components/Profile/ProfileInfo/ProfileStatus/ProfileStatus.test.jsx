import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
  test("span shoult be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatusWithHooks />);
    });
    const root = component.root;
    const span = root.findByType("span");
    expect(span).not.toBeNull();
  });

  test("input shoultn't be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatusWithHooks />);
    });
    const root = component.root;
    expect(() => {
      const input = root.findByType("input");
    }).toThrow();
  });

  test("span with correct status", () => {
    const statusText = "test status";
    let component;
    act(() => {
      component = create(<ProfileStatusWithHooks status={statusText} />);
    });
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe(statusText);
  });

  test("input shoult be displayed in editMode instead of span", () => {
    const statusText = "test status";
    let component;
    act(() => {
      component = create(<ProfileStatusWithHooks status={statusText} />);
    });
    const root = component.root;
    const span = root.findByType("span");
    act(() => {
      span.props.onDoubleClick();
    });
    const input = root.findByType("input");
    expect(input.props.value).toBe(statusText);
  });
});
