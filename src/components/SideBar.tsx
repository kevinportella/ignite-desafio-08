import { memo } from "react";
import { Button } from "./Button";

function ButtonGenre({genre, onClick, selected}: any) {
  return (
    <Button
      title={genre.title}
      iconName={genre.name}
      onClick={onClick}
      selected={selected}
    />
  )
}

const ButtonGenreMemo = memo(ButtonGenre, (prevProps, nextProps) => {
  return (prevProps.selected === nextProps.selected);
});
interface SideBarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

function SideBarContent({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <ButtonGenreMemo
            key={String(genre.id)}
            genre={genre}
            onClick={() => buttonClickCallback(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}

export const SideBar = memo(SideBarContent)
