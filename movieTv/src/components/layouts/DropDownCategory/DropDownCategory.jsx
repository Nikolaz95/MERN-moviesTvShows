import React from 'react'


//import css
import "./DropDownCategory.css";

const DropDownCategory = ({ categories, handleCategoryChange, showDropdown, handleOpenDropDown }) => {
    return (

        <section className="dropdown-content">
            <button className='btn-Filter' onClick={handleOpenDropDown}>
                Category
            </button>
            {showDropdown && (
                <div className='dropDown-menu'>
                    {categories.map((item) => (
                        <option
                            key={item.category}
                            className='dropdown-btn'
                            onClick={() => handleCategoryChange(item.category)}
                        >
                            {item.dropTitle}
                        </option>
                    ))}
                </div>
            )}
        </section>


    )
}

export default DropDownCategory