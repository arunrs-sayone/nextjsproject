
interface Props {
    data : {
        "id": number,
        "title": string,
        "subtitle":string
        "items": Array<Item>
    }
   
}

type Item = {
    "id": number,
    "title": string,
    "description": string
}

const OurService = ({data}:Props) => {

    return (
        <>
            <section id="service">
                    <div className="container">
                        <h6 className="section-subtitle text-center">{data.title}</h6>
                        <h5 className="section-title text-center mb-6">{data.subtitle}</h5> 
                        <div className="row">
                        {data.items.map((item:Item) => (
                            <div className="col-sm-4 col-md-3">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h2 className="mb-4"><i className="ti-filter text-primary"></i></h2>
                                    <h6 className="card-title">{item.title}</h6>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            </div>
                        ))}  

                        </div>  
                    </div>
                </section>
        </>
    )
}

export default OurService