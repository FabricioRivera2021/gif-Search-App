import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

/* Funcion magica de mocks */
jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";

  test("Debe mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid categoria={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "A",
        title: "Saitama",
        url: "https://localhost/saitama.jpg",
      },
      {
        id: "B",
        title: "Goku",
        url: "https://localhost/goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({//funcion de mock
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid categoria={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);//espera q las imagenes q lleguen sean 2..

    // screen.debug()
  });
});
