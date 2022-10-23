import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FilterBox({ data, title = "title", children }) {
    return (
        <div className="mt-0 shop__filter-accordian-box">

            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Filter By {title.charAt(0).toUpperCase() + title.slice(1)}</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    {children ? children :
                        <div className="shop__filter-box">
                            {/* <input type="text" placeholder="search" className="shop__filter-input" /> */}

                            <ul className="shop__filter-list">
                                {data.map((el, i) =>

                                    <li key={i}>
                                        <div>
                                            <input type="checkbox" name={`${title}-${i}`} id={`${title}-${i}`} />
                                            <label htmlFor={`${title}-${i}`}>{el}</label>
                                        </div>
                                        <h5 className="shop__filter-item-count">25</h5>
                                    </li>
                                )
                                }
                            </ul>
                        </div>}

                </AccordionDetails>
            </Accordion>
        </div>
    )
}
