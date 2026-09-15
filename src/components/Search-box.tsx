type SearchBoxProps = {
  searchField: string;
  setSearchField: (value: string) => void;
  placeholder?: string;
  className?: string;
};

const SearchBox = ({
  searchField,
  setSearchField,
  placeholder = "Hunt for a monster...",
  className = "",
}: SearchBoxProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchField(e.target.value);

  return (
    <div className="group relative w-full max-w-lg">
      {/* outer glow */}
      <div
        className="
          absolute -inset-1
          rounded-3xl
          bg-gradient-to-r
          from-lime-400
          via-violet-500
          to-emerald-400
          opacity-30
          blur-lg
          transition-all
          duration-500
          group-focus-within:opacity-80
          group-focus-within:blur-xl
        "
      />

      <div
        className="
          relative
          flex
          items-center
          overflow-hidden
          rounded-3xl
          border
          border-lime-400/20
          bg-slate-950/95
          shadow-2xl
          backdrop-blur-xl
        "
      >
        <div className="absolute left-5 flex items-center">
          <span
            className="
              monster-eye
              text-2xl
              transition-transform
              duration-500
              group-focus-within:scale-125
            "
          >
            👁️
          </span>
        </div>

        <input
          className={`
            w-full
            bg-transparent
            py-5
            pl-16
            pr-6
            font-medium
            tracking-wide
            text-lime-100
            outline-none
            placeholder:text-slate-500
            ${className}
          `}
          type="search"
          placeholder={placeholder}
          value={searchField}
          onChange={handleSearchChange}
        />

        <div
          className="
            absolute
            bottom-0
            left-0
            h-[2px]
            w-0
            bg-gradient-to-r
            from-lime-400
            via-violet-500
            to-emerald-400
            transition-all
            duration-500
            group-focus-within:w-full
          "
        />
      </div>
    </div>
  );
};

export default SearchBox;
