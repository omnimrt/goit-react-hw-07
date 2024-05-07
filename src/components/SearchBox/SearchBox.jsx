import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <label className={css.searchBoxDiv}>
        <span>Find contacts by name</span>
        <input
          type="text"
          placeholder="Search..."
          value={filter}
          onChange={onChangeFilter}
          className={css.input}
        />
      </label>
    </div>
  );
};

export default SearchBox;
