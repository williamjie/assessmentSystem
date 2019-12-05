import React, { useEffect, useState, useContext } from 'react';
import "./header.css"

import { getCandidateCount } from "./header_ts"

import { storeContext } from "../../store"


function Header() {
    const [count, setCount] = useState(0)
    const { store } = useContext(storeContext)
    useEffect(() => {
        (async () => {
            let res = await getCandidateCount()
            setCount(res.count)
        })()
    })
    return (
        <div className="header">
            <div className="content">
                <div className="logo">
                    <img src="/images/logo.png" width="65" height="65" alt="logo" />
                </div>
                <div className="desc">
                    <p>{store.candidate_id}</p>
                    <p>北京交通大学威海校区</p>
                    <p>部门负责人年度考核民主评测</p>
                </div>
            </div>
            <div className="footer">
                待考核<span>{count}</span>人
            </div>
        </div>
    )
}
export default Header