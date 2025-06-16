import SearchBar from './SearchBar'
import SortBar from './SortBar'


const Banner = ({handleSearchChange, searchQuery}) => {
    return (<div>
        <SearchBar searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
        <SortBar/>
    </div>)
}

export default Banner;