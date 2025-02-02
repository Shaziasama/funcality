import Brand from '@/components/Brand';
import Footer from "@/components/Footer";
import Hero from '@/components/Hero';
import react from 'react';
import Brands from './brands/page';
import FontShowcase from '@/components/Brand';



export default function Home() {
    return (
        <div>
        
            <Hero />
            <FontShowcase/>

           
           <Brands />
        
        
        </div>
    )
}
