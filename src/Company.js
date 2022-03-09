
/** Company: One company component
 * 
 * Props: company object
 * 
 * State: none
 * 
 * Companies -> Company
 */


function Company({company}){
    return ( <div className="company">
        <h1>{company.name}</h1>
        <h2>{company.description}</h2>
        {company.logoUrl && <img src = {company.logoUrl} alt = "companylogo"/>}

    </div>

    );

}

export default Company;