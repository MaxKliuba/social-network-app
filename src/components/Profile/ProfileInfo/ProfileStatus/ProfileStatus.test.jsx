import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus component", () => {
  test("div shoult be displayed", () => {
    let component;
    act(() => {
      component = create(<ProfileStatusWithHooks />);
    });
    const root = component.root;
    const div = root.findByType("div");
    expect(div).not.toBeNull();
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

  test("div with correct status", () => {
    const statusText = "test status";
    let component;
    act(() => {
      component = create(<ProfileStatusWithHooks status={statusText} />);
    });
    const root = component.root;
    const div = root.findByType("div");
    expect(div.children[0]).toBe(statusText);
  });
});
