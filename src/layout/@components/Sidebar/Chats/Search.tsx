import { IoSearch } from "react-icons/io5";
const Search = () => {
  return (
    <div className="mb-6">
    <form action="#">
      <div className="input-group">
        <div className="input-group-text">
          <div className="icon icon-lg">
            <IoSearch className="feather feather-search"/>
          </div>
        </div>

        <input
          type="text"
          className="form-control form-control-lg ps-0"
          placeholder="Search messages or users"
          aria-label="Search for messages or users..."
        />
      </div>
    </form>
  </div>
  )
}

export default Search