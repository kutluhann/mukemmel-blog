const SearchField = () => {
  return (
    <div className="mb-6 touch:mb-0 touch:mt-4 shadow rounded-10 flex justify-center p-5 flex-col w-full">
      <label htmlFor="search-input">
        <h3 className="title flex items-center mb-4">
          <svg className="h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <span className="ml-2">Ara</span>
        </h3>
      </label>
      <form action="">
        <input id="search-input" className="h-8 w-full border-none focus:outline-none text-8 touch:text-7" type="text" v-model="searchText" placeholder="Gönderilerde ara.."/>
      </form>
    </div>
  )
}

export default SearchField