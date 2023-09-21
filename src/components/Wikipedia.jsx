import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { BsFillArrowLeftSquareFill } from "react-icons/bs";


function Wikipedia() {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);
    const [searchInfo, setSearchInfo] = useState({});
    const [notFound, SetNotFound] = useState(false);
    const [page, SetPage] = useState(10);

    console.log(page)
    const fetchData = async (searchQuery, selectedPage) => {
        
        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&
            prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=${selectedPage}&srsearch=${searchQuery}`;

        try {
            const response = await fetch(endpoint);

            if (!response.ok) {
                throw Error(response.statusText);
            }

            const json = await response.json();

            if (json) {
            setResults(json.query.search);
            setSearchInfo(json.query.searchinfo);
            }
            if (json.query.searchinfo.totalhits === 0) {
                SetNotFound(true);
            } else {
                SetNotFound(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (search === '') {
            return;
        }

        fetchData(search, page);
    };
    useEffect(() => {
        
        fetchData(search);
    }, [page]);

    return (
        <>
            <section className='section_wiki'>
            <Link to='/'><BsFillArrowLeftSquareFill className='back_wiki_home' /></Link>
            <div className="wiki_container">
                <header>
                    <h1>Wiki Search</h1>
                    <form className='search-box' onSubmit={handleSearch}>
                    <BsSearch className='search_wiki'/>
                        <input
                            type="search"
                            placeholder='Search....'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    <div className="middle_text_container">
                    {searchInfo.suggestion && searchInfo.suggestion !== search ? (
                        <p className='p_search_instead'>
                            Search instead for{' '}
                            <span onClick={() => {
                                setSearch(searchInfo.suggestion);
                                fetchData(searchInfo.suggestion, page); 
                            }}>
                                {searchInfo.suggestion}
                            </span>
                        </p>
                    ) : null}
                    {searchInfo.totalhits ? (
                        <>
                        <p className='p_search_result'>
                            Total Result: 
                            <span className='total_number'>
                                {searchInfo.totalhits}
                            </span></p>
                            <select className='select' 
                                onChange={(e) => {
                                    const selectedPage = e.currentTarget.value;
                                    SetPage(selectedPage);
                                    fetchData(search, selectedPage);
                                    }}>
                                <option value='10'>10</option>
                                <option value='20'>20</option>
                                <option value='50'>50</option>
                                <option value='100'>100</option>
                            </select>
                        </>

                    ) : notFound ? (
                        <span className='notFound'>Result not found.</span>
                    ) : null}
                    </div>
                </header>
                <div className="results">
                    {results.map((result, i) => {
                        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
                        return (
                            <div className="result" key={i}>
                                <a href={url} target='_blank' rel='noreferrer'>
                                    <span className='result_title'>
                                        {result.title}
                                    </span>
                                </a>
                                <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
                            </div>
                        );
                    })}
                </div>
            </div>
            </section>
        </>
    );
}

export default Wikipedia;