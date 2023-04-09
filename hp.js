import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import dummyData from "./data";
import Productdescriptionpage from "./productdescriptionpage";
import "./hp.css";


{/*        myLists.map((myList) => <li>{myList}</li>);
        return(<div><h2>React Map</h2> <ul>{listItems}</ul></div>);*/}
const Hp = () => {
    var title = [], //newArray = [],
        category = [], image = [],
        len = 0, 
        len1,
        count = 0, count1 = 0,
        previ,
        last, last1,
        myStyle;
    var checkedState = [];
    var i = 0, j = -1;
    const [data, setData] = useState([]);
    const [cate, updateCate] = useState("none");
    //const [checkedState, setCheckedState] = useState(newArray.fill(false));
    checkedState[i] = true;
    useEffect(() => {
        //setLoading(true);
        const timer = setTimeout(() => {
            setData(dummyData);
            //console.log("videos = " + videos)
            //console.log("set");
            //setLoading(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    function NameList(props){ 
        //const myLists = props.mylists; 
        const newcat = props.newcat;
        const listItems = 
            data.map((list, index)=>{
                if(list.category === newcat){ 
                    return(
                        '<li key = {'+index+'}>'+ 
                            '<div className = "listings-list-item">'+
                                '<div>'+
                                    '<input type = "radio" className = "form-check-input" id = { `custom-checkbox-${'+index+'}` } name = "title" value = {'+list.title+'} />'+
                                    '<label htmlFor = { `custom-checkbox-${'+ index +'}` } > {'+list.title+'} </label>'+
                                '</div>'+
                                '<div className = "buy" > <button key = {'+index+'} onClick = "click()"> Buy Now < /button> </div > <br/>'+
                            '</div>'+ 
                        '</li>'
                    );
                }
                else{ return null; }
            }).join('');
        console.log("listitems = "+listItems);
        
        return({listItems});
    }

    function click(e){
        alert("hello world");
        var Title = e.target.value;
        var inhtml;
        document.querySelector('#lists').innerHTML= 
        data.map((list) => { 
            if (list.title === Title) { 
                inhtml = '<div className = "label"> ' + Title +' </div> <div className = "label"> '+ list.price +' </div> <div className = "label"> '+ list.description +' </div> <div className = "label"> '+ list.category +' </div> <div className = "label"> '+ list.image +' </div>';
            } 
            else { inhtml = null; }       
            return inhtml;       
        }).join('');
    }
                //index, i
                //var rating = list.rating;
                /*<div className = "label"> { id }          </div>*/
                /*<div className = "label"> { rating }      </div>*/    
                //<Productdescriptionpage id = { id } title = { list.title } price = { price } description = { description } category = { category } image = { image } rating = { rating } /> 


    //handleOnChange for category
    function onCateChange(e) {
        const newcate = e.target.value;
        updateCate(newcate);
        console.log("newcate = "+newcate);
        if(newcate === "none"){         console.log("newcate1 = "+newcate);
        document.querySelector('#lists').innerHTML= data.map((list, index) => { 
                //if (newcate === "none"){
                //if(list.category === newcate){
                    //console.log("map");
                    /* setCount(0); */ count = 0; count1 = 0;

                    //console.log("list = " + JSON.stringify(list));
                    //console.log("category.length = " + category.length);
                    //console.log("id = " + list.id);

                    if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    else {
                        for (let x of image) { if (x === list.image) { return null; } else { count = count + 1; } }
                        if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; }
                    }

                    if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                    else { 
                        for (let x of title) { if (x === list.title) { return null; } else { count1 = count1 + 1; } }
                        if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1=title[len]; }
                        myStyle = { backgroundimage: "url(last)" }
                    }
                    return ( 
                        '<ul><li key = { index }>'+
                            '<div className = "listings-list-item">'+
                                '<div style = {'+ myStyle +'} > <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${'+index+'}` } name = "title" value = {'+ last1 +'} backgroundimage = "url({'+last+'})" /> <label htmlFor = { `custom-checkbox-${'+index+'}` } > {'+ last1 +'} </label> </div >'+ 
                                '<div className = "buy" > { <div > <button key = {'+ index +'} value = {'+last1+'} onClick = {'+ click(this) +'} > { "Buy Now" } < /button> <br/ > </div> } </div>'+
                            '</div>'+
                        '</li></ul>'
                    ); 
            }).join('');
                    /*list.id */
                    /* {<img src = { last } alt = "images" width = "60px" height = "60px" / >} */ 
                    /*< /div >*/
                    //}
        }
        else{ console.log("NEW_ELSE");
            document.querySelector('#lists').innerHTML= NameList(newcate);
            /*
            data.map((list, index) => {
                if(list.category === newcate){ 
                    myStyle = { backgroundimage: "url(list.image)" }
                    return( '<li key = {' + index + '}> <div className = "listings-list-item"> <div> <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${' + index + '}` } name = "title" value = {'+ list.title + '} /> <label htmlFor = { `custom-checkbox-${' + index + '}` } > ' + list.title + ' </label> < /div > <div className = "buy" > <button key = {' + index + '} onClick = "' + click + '"> Buy Now < /button> </div > <br/> < /div > < /li>');
//                    return('<li key = {' + index + '}> <div className = "listings-list-item"> <div> <input type = "radio" className = "form-check-input" id = { `custom-checkbox-${' + index + '}` } name = "title" value = {'+ list.title + '} /> <label htmlFor = { `custom-checkbox-${' + index + '}` } > ' + list.title     + ' </label> < /div > <div                   > <button key = {' + index + '}                            >{"buynow"}< /button> </div > <br/> < /div > < /li>') ; //}).join('');

                    // wizard
                    // style = {' + myStyle + '} 
                    // backgroundimage = "url({' + list.image + '})" 

                    //return '<li> <div> <button> buy now </button> </div> </li>';
                }
                else{ return null; }
            }).join('');*/
            //document.getElementById("lists").innerHTML += data.map((list, index) => { return "<div>123</div>"; }).join('');
            
            /*data.map((list, index) => { 
                console.log("data"); 
                if(list.category === newcate){ 
                    console.log("list"); count = 0; count1 = 0; 
                    if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    else { 
                        for (let x of image) { 
                            if (x === list.image) { return null; } 
                            else { count = count + 1; } 
                        } 
                        if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                    } 
                    if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                    else { 
                        for (let x of title) { 
                            if (x === list.title) { return null; } 
                            else { count1 = count1 + 1; } 
                        } 
                        if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                        myStyle = { backgroundimage: "url(last)" } 
                    } 
                    return ( <li key = { index } > <div className = "listings-list-item" > <div style = { myStyle } ><input type = "radio" className = "form-check-input" id = { `custom-checkbox-${index}` } name = "title" value = { last1 } backgroundimage = "url({last})" /> <label htmlFor = { `custom-checkbox-${index}` } > { last1 } </label> < /div > <div className = "buy" > { <div > <button key = { index } onClick = { () => { alert("Hello"); data.map((list, i) => { if (list.category === title[index]) { var id = list.id; var price = list.price; var description = list.description; var category = list.category; var image = list.image; var rating = list.rating; } else { return null; } return ( <Productdescriptionpage id = { id } title = { list.title } price = { price } description = { description } category = { category } image = { image } rating = { rating } /> ); }) }} > { "Buy Now" } < /button> <br/ ></div> } </div > < /div > < /li> ); 
                }
            }).join('');*/
        }
        
    };
    //similar to category, all rest filters, etc


    //const [total, setTotal] = useState(0);
    //const [isChecked, setIsChecked] = useState(false);
    //const handleOnChange = () => { setIsChecked(!isChecked); };

    return ( 
        < div className = "gridContainer" >
            < div className = "header" >
                < div className = "inner-header" >
                    < div className = "space" > < /div>    
                    < div className = "middle" >
                        < div className = "f1" > Sagar Fashions 
                            < span className = "store-style" > Store </span>  
                        </div > 
                        < div className = "f2" > </div>      
                        < button className = "cart-button" >
                            <img src = "data:image/png;base64,
                            iVBORw0KGgoAAAANSUhEUgAAAJsAAAB8CAMAAABJ / jKEAAAAbFBMVEX /
                            //8jJygAAACRk5IYHR6YmZr8/fxpamoHDxGJiorZ2trh4uL6+
                            vobICGUlpUPFBZxc3Pq6 + vz9PTR09K3uLjKy8p7fX1aXV6xsrLAwcFT VVYWGx8LFhMACgpPUFKho6RFSkorLy85OzxAQ0To7mcfAAADn0lEQVR 4 nO2aXXOqMBCGIcYAQhoDKKhVBP //fzwJUEENnlZ2gYs80+lN7fjOZn
                            ezH3Eci8VisVgsFovFYrFMBnOi8BHJ5tbUwpzNkTzy7cm5VbXEZ + o + 4 V / iuVU1pORZmuuKnbOIcy38V23 + 19 yqGhKD3fh1blUtHqG8oxFHFnGk inzrdZSNtt3cou5EjLGoxtmLOhgW4nCP5LX7UW8ph9onrLXxainpt4M 58 a0OB5LMLcVE43DUC15ZPfPVsjaTQxs / r7W5VPTwP8QNYbUl4jUXf4 rIIlhxcNJUTAEbznupS5ajLT / DSTsCF1sJnN1EAFxryRuH0kYOoMoUW zDD + cBhqqpNQ0X3ETQDVqaaGyhtfgGsTakDkua6CJeyB3M18BtCu1bA ZDixh5fm7GACFT6DKGQJow2lPs0gDEehi5CGNYTDiTWGNGcHkeEIzuB CVhBXKk6rFgHUcNRDkaYcbnz2PedI2gAcrtwgaYtGawMveTsuYx1Olb xYfI3NcCgXVsNohyN4I + OwGicNLYMoWDYu + wr4krcjMIyo / 2 I3zDnUO IfjN5QapEWOuhkIRsl7hx0 / dzhKbphjT + as / mw4ToUvKC + rSyBx9zqH3 2 rjStOZEOJevaDId6E2GcMdZcv / 3 lpa01m4t6MXrNNExhOO1oeyr7aT 8 LWhsn2RJhuJGZIDPGc4zk9CK6qO26A4JLMO + Q8 / GY7rYTQt9dkVh00Y z2CnZ8LW4WilNe0WoemHOFvwFiSos4i / mluHiWZbzrMlrt1kEwxVyCK9 xHxl6B + RM29N20Fnnomt + jGTT2HoZu2m8j + lnKqUS08aeqKa5vcd / Yc Wkk3whCP //uWV+sQZs+ht2XwmzRVbfG3s+lkN5+P1ph35R4U5R20WW
                            phTUPJ3eIovTdeu8cPrs817koaFPLRaAFGSpsn7MkTu0gPwIvdXpBdX CPf6ZtgXf1Vc0DLDmrkNsiJ1KuFkP3RRylsT0PQ8RRj0WN8TCRnIW3F 278 nEpI + sZC9zUfOZ9Z4egq9M38Ae3hUOPO / qXx9kyoDY93po81Qt6t 9 sBGs8 / gpztqeetqMpGB66bDJBDXIn6NvNXGA82G3KSM37 / mY2Sn9t iLOYHCAuO7Nw8xcfujgViHNe0zffDTe4Bgp + xNEynPbVck6ENh0ddvMo IzpiuO9O + 75 VmWGzrwgpt + 8 qxtRzyfc1mGMsIUM98nvXkEbqI / Gbj1g sFovFYrFYLBaLZRr + AWdJN0pucJ / aAAAAAElFTkSuQmCC "
                            alt = "cart icon"
                            className = "image" / >
                            <div className = "incno" > < /div>      
                            <span className = "cart" > Cart < /span>         
                        </button > 
                    </div>  
                    <div className = "space" > < /div>   
                </div > 
            </div >
            <div className = "banner-outer" >
                <img src = "https://img.freepik.com/free-vector/e-commerce-banners-collection_1284-19367.jpg?w=740&t=st=1673882265~exp=1673882865~hmac=1d5f14f05449e38474d564a1533e0b0a295590951f59d2240f98e908501ea617"
                alt = "E-commerce banner"
                className = "banner"
                height = "40%"
                width = "40%" / >
            </div> 
            <div className = "content" >
                <div className = "filter" >
                    <div className = "category" >
                        <ul className = "toppings-list" id = "cats" > 
                            <li key = {j + 1} > 
                                <div className = "toppings-list-item" > 
                                    <label htmlFor = "none" >
                                        <input type = "radio"
                                        className = "form-check-input"
                                        id = "none"
                                        name = "category"
                                        value = "none"
                                        checked = {cate === "none"}
                                        onChange = { onCateChange } / >
                                        "NONE" 
                                    </label>   
                                </div > 
                            </li> 
                            {
                                data.map((list, index) => { 
                                    /* setCount(0); */ count = 0; 
                                    //console.log("list = " + JSON.stringify(list));                
                                    //console.log("category.length = " + category.length);                
                                    //console.log("id = " + list.id);
                                    /*if (category.length === 0) {
                                        //category.push(list.category); //console.log("push");   
                                        //console.log("category.length = " + category.length)

                                        //len = category.length - 1; console.log("len=" + len);                    
                                        //console.log("category[len]=" + category[len]);
                                        
                                        //last = category[len]; console.log("last=" + last); setLast(elem);
                                    } else { //console.log("else");
                                    */
                                    for (let x of category) { 
                                        if (x === list.category) { return null; } else { count = count + 1; }
                                    }
                                    if (count === category.length) { 
                                        i = i + 1; category.push(list.category); checkedState.push("false");
                                        len = category.length - 1; last = category[len]; previ = i; 
                                    } 
                                    return ( 
                                        <li key = { list.category } > 
                                            <div className = "toppings-list-item" > 
                                                <label htmlFor = { `custom-checkbox-${index}` } >
                                                    <input type = "radio"
                                                    className = "form-check-input"
                                                    id = { `custom-checkbox-${index}` }
                                                    name = "category"
                                                    value = { list.category }
                                                    checked = { cate === list.category }
                                                    onChange = { onCateChange } /> 
                                                    { list.category } 
                                                </label> 
                                            </div > 
                                        </li>
                                    ); 
                                    
                                    /*
                                        category.push({
                                            data.map((list, index) => {
                                                count = 0;
                                                if ((category.length === 0) || (category.indexOf(list.category) === -1)) {
                                                    return list.category; } 
                                                else return null;
                                            })
                                        });
                                        for (var i = 0; i < category.length; i++) {
                                            if (category[i] == null) { category.splice(i, i); i--; } 
                                            else { newArray.push("false");
                                                //return <div ... ><input key = {i} ... ></div> 
                                                return ( 
                                                    <li key = { index } > 
                                                        < div className = "toppings-list-item" >
                                                            <input type = "radio"
                                                            class = "form-check-input"
                                                            id = { `custom-checkbox-${index}` }
                                                            name = "category"
                                                            value = { list.category }
                                                            checked = { checkedState[index] }
                                                            onChange = { () => handleOnChange(index) } />  
                                                            <label htmlFor={`custom-checkbox-${index}`}>{list.category}</label> 
                                                        < /div > 
                                                    < /li>
                                                );
                                            }
                                        }
                                    */
                                    
                                })
                            } 
                        </ul> 
                    </div > 
                    <div className = "price" >
                        <ul> <li type = "radio"> Increasing </li> <li type = "radio"> Decreasing </li> </ul>
                    </div >   
                </div > 
                <div className = "listing" >
                    <ul className = "listings-list" id = "lists" > 
                    { 
                        data.map((list, index) => { 
                            //if (newcate === "none"){
                            //if(list.category === newcate){
                                //console.log("map");
                                /* setCount(0); */ count = 0; count1 = 0;

                                //console.log("list = " + JSON.stringify(list));
                                //console.log("category.length = " + category.length);
                                //console.log("id = " + list.id);
                                if (image.length === 0) { image.push(list.image); len = image.length - 1; last = image[len]; } 
                                else {
                                    for (let x of image) { if (x === list.image) { return null; } else { count = count + 1; } }
                                    if (count === image.length) { image.push(list.image); len = image.length - 1; last = image[len]; }
                                }
            
                                if (title.length === 0) { title.push(list.title); len1 = title.length - 1; last1 = title[len]; } 
                                else { 
                                    for (let x of title) { if (x === list.title) { return null; } else { count1 = count1 + 1; } }
                                    if (count === title.length) { title.push(list.title); len1 = title.length - 1; last1=title[len]; }
                                    myStyle = { backgroundimage: "url(last)" }
                                }
                                //checked = { checkedState[index] }
                                //onChange = { () => handleOnChange(index) }
                                //return '<li> <div> <button> buy now </button> </div> </li>';
                                
                                return ( 
                                    <li key = { index } >
                                        <div className = "listings-list-item" >
                                        
                                            <div style = { myStyle } >
                                                <input type = "radio"
                                                className = "form-check-input"
                                                id = { `custom-checkbox-${index}` }
                                                name = "title"
                                                value = { last1 }
                                                backgroundimage = "url({last})" />
                                                <label htmlFor = { `custom-checkbox-${index}` } > 
                                                    { last1 } 
                                                </label> 
                                            </div > 
                                            <div className = "buy" > 
                                            { 
                                                <div > 
                                                    {/*list.id */}
                                                    <button key = { index }
                                                    value = {last1}
                                                    onClick = {
                                                        () => {
                                                            alert("Hello");
                                                            data.map((list) => {
                                                                if (list.category === title[index]) {
                                                                    var id = list.id;
                                                                    //var title = list.title;
                                                                    var price = list.price;
                                                                    var description = list.description;
                                                                    var category = list.category;
                                                                    var image = list.image;
                                                                    var rating = list.rating; } 
                                                                else { return null; }
                                                                return ( <Productdescriptionpage id = { id }
                                                                            title = { list.title }
                                                                            price = { price }
                                                                            description = { description }
                                                                            category = { category }
                                                                            image = { image }
                                                                            rating = { rating } /> );
                /* <Productdescriptionpage  ii = { id } title = { title } price = { price } description = { description } 
                                            category = { category[index] } image = { image } rating = { rating } /> */ 
                                                            })
                                                                //productdescriptionpage(element) 
                                                        }
                                                    } > 
                                                        { "Buy Now" } 
                                                    < /button> 
                                                    <br/ >
                                                </div>
                                            } 
                                            </div> 
                                        </div> 
                                    </li> 
                                ); 
                                /* <img src = { last } alt = "images" width = "60px" height = "60px" / > </div>*/ 
                        })    
                    } 
                    </ul> 
                    {/*
                        <div className = "title" > {
                            data.map((list, index) => {
                                /*setCount(0);*/ /*count = 0;
                                //console.log("list = " + JSON.stringify(list));
                                //console.log("category.length = " + category.length);
                                //console.log("id = " + list.id);
                                if (title.length === 0) {
                                    title.push(list.title); //console.log("push");
                                    //console.log("category.length = " + category.length)
                                    len = title.length - 1; //console.log("len=" + len);
                                    //console.log("category[len]=" + category[len]);
                                    last = title[len]; //console.log("last=" + last); //setLast(elem); } 
                                else { //console.log("else");
                                    for (let x of title) {
                                        // or		for(let x = 0; x < category.length; x++){
                                        //                            category.forEach(element => {
                                        if (x === list.title) {
                                            //  if (element === list.category) { 
                                            //  therefore, for of method recommended for array
                                            //						Break; 
                                            //console.log("else1");
                                            return null;
                                        } 
                                        else {  //setCount(count + 1);
                                                count = count + 1; //console.log("count = " + count); }
                                        //                            });
                                    }
                                    if (count === title.length) {
                                        title.push(list.title); //console.log("push(1)");
                                        //console.log("category.length(1) = " + category.length)
                                        
                                        len = title.length - 1; //console.log("len(1)=" + len);
                                        //console.log("category[len](1)=" + category[len]);

                                        last = title[len]; //console.log("last(1)=" + last);
                                        //setLast(elem);   
                                    }
                                }
                                //category[category.length – 1] 
                                //                                category.forEach(e => {
                                // });}</div> --- )}
                                return ( < div key = { index } > { last } < /div> ); 
                            })
                        } 
                        </div> 
                    */}
                </div > 
            </div > 
            <div className = "footer" >
                <div className = "about"   > About Company   </div>   
                <div className = "contact" > Company Contact </div>    
                <div > </div> 
            </div > 
        </div >
    );
}
export default Hp; 

    //map: returns set twice
    //cat select effect -- advance
    //cat select print -- id, etc.. --- examine.
