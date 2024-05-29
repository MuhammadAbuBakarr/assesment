import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlogPost from "./BlogPost"; // Assume this component exists

describe("BlogPost Component", () => {
  const post = {
    title: "Test Post",
    content: "This is a test post.",
    author: "John Doe",
  };

  test("renders the BlogPost component", () => {
    render(<BlogPost post={post} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
    expect(screen.getByText("This is a test post.")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("calls the edit function when the Edit button is clicked", () => {
    const mockEdit = jest.fn();
    render(<BlogPost post={post} onEdit={mockEdit} />);

    // Assuming the Edit button has text 'Edit' and is rendered in the component
    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    // Check if the mockEdit function is called once
    expect(mockEdit).toHaveBeenCalledTimes(1);
  });

  test("calls the delete function when the Delete button is clicked", () => {
    const mockDelete = jest.fn();
    render(<BlogPost post={post} onDelete={mockDelete} />);

    // Assuming the Delete button has text 'Delete' and is rendered in the component
    const deleteButton = screen.getByText("Delete");
    fireEvent.click(deleteButton);

    // Check if the mockDelete function is called once
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
