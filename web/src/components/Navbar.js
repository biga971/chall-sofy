import React from 'react'
import '../css/Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigation = useNavigate()
    return (
        <nav className="navbar">
            <a href="" class="lazyloaded" onClick={() => navigation('/')}> 
               <img width="120" height="50" alt="logo sofy color" 
               sizes="(max-width: 300px) 100vw, 300px" 
               nitro-lazy-srcset="https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color-300x96.png 300w, https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color-768x246.png 768w, https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color.png 773w" 
               nitro-lazy-src="https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color-300x96.png" 
               class="attachment-medium size-medium wp-image-62390 lazyloaded" 
               decoding="async" nitro-lazy-empty="" id="MjI1OjQ1Mg==-1" 
               src="https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color-300x96.png" 
               srcset="https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color-300x96.png 300w, https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color-768x246.png 768w, https://cdn-jdjoh.nitrocdn.com/AqotNcZRQbqHLhoUWVGNSJBhhVcLRJWD/assets/images/optimized/rev-4c4b0d4/sofy.fr/wp-content/uploads/2023/06/Logo_Sofy_color.png 773w" /> 
            </a>
        </nav>
    )
}

export default Navbar