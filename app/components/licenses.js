"use client";

const Licenses = () => {
    const url = '/api/license'

    const getLicenses = async () => {
        const res = await fetch(url);
        console.log(res.json());
        const obj = await res.json();
        return obj;
    }

    const licenseList = getLicenses();
    // console.log(licenseList)

    // const ListItems = licenseList.map((item) =>
    //     <li key={index}>
    //         <h2>{index}</h2>
    //         <div>{item.licenses}</div>
    //     </li>
    // )

    return (
        <div>
            {licenseList}
        </div>
    )
}

export default Licenses;