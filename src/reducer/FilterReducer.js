const FilterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            const priceArr = action.payload.map((ele) => {
                return ele.price;
            })
            // Find Max of the Price | Spread Operator
            let maxPrice = Math.max(...priceArr)
            // Find Min of the Price | Spread Operator
            let minPrice = Math.min(...priceArr)

            return {
                ...state,
                filterProducts: [...action.payload],
                allProducts: [...action.payload],
                filters:{
                    ...state.filters,
                    price: maxPrice,
                    maxPrice: maxPrice,
                    minPrice: minPrice
                }
            }
        case "SET_GRID_VIEW":
            return {
                ...state,
                gridView: true
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                gridView: false
            }
        case "GET_SORT_VALUE":
            // DOM Manipulation
            // const ele = document.getElementById("sort");
            // const sortingValue = ele.options[ele.selectedIndex].value;
            return {
                ...state,
                sortValue: action.value
            }
        case "SORTING_PRODUCTS":
            const {filterProducts} = state
            let newSortData;
            let tempSortData = [...filterProducts];
            const method = (a, b) => {
                switch (state.sortValue){
                    case "a-z":
                        return a.name.localeCompare(b.name)
                    case "z-a":
                        return b.name.localeCompare(a.name)
                    case "lowest":
                        return a.price - b.price
                    case "highest":
                        return b.price - a.price
                    default: 
                        return null;
                }
            }
            newSortData = tempSortData.sort(method);
            return {
                ...state,
                filterProducts: newSortData
            }
        case "UPDATE_FILTER_VALUES":
            const {name, value} = action.payload
            return {
                ...state,
                filters:{
                    ...state.filters,
                    [name]: value
                }
            }
        case "CLEAR_FILTER_VALUES":
            return {
                ...state,
                filters:{
                    text: "",
                    category: "All",
                    company: "All",
                    color: "All",
                    price: state.filters.maxPrice,
                    maxPrice: state.filters.maxPrice,
                    minPrice: state.filters.minPrice
                }
            }
        case "UPDATE_FILTER_PRODUCTS":
            const {allProducts} = state;
            let tempProducts = [...allProducts];

            const {filters} = state;

            if(filters.text){
                tempProducts = tempProducts.filter((ele) => {
                    return ele.name.toLowerCase().includes(filters.text.toLowerCase());
                })
            }
            if(filters.category !== "All"){
                tempProducts = tempProducts.filter((ele) => {
                    return ele.category === filters.category
                })
            }
            if(filters.company !== "All"){
                tempProducts = tempProducts.filter((ele) => {
                    return ele.company === filters.company
                })
            }
            if(filters.color !== "All"){
                tempProducts = tempProducts.filter((ele) => {
                    return ele.colors.includes(filters.color)
                })
            }
            if(filters.price){
                tempProducts = tempProducts.filter((ele) => {
                    return ele.price <= filters.price
                })
            }
            return {
                ...state,
                filterProducts: tempProducts
            }
        default:
            return state;
    }
}

export default FilterReducer;