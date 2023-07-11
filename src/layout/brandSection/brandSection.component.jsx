import kanba from '../../assets/brandLogos/kanba.png'
import earth2 from '../../assets/brandLogos/earth2.png'

import treva from '../../assets/brandLogos/treva.png'

import kyan from '../../assets/brandLogos/kiya.png'

import liva from '../../assets/brandLogos/liva.png'

const BrandSection = () =>  {
    return (
        <div className="my-[60px] flex flex-col justify-center items-center ">
            <h4 className="text-[#9a9a9a] text-lg">Supported by international brands</h4>
            {/* Brands */}
            <div className="flex justify-between flex-wrap ">
                <div className='flex items-center justify-center min-w-[270px] '>
                    <img src={kanba} alt=""/>
                </div>
                <div className='flex items-center justify-center min-w-[270px]'>
                    <img src={earth2} alt="" />
                </div>
                <div className='flex items-center justify-center min-w-[270px]'>
                    <img src={treva} alt="" />
                </div>
                <div className='flex items-center justify-center min-w-[270px]'>
                    <img src={kyan} alt="" />
                </div>
                <div className='flex items-center justify-center min-w-[270px]'>
                    <img src={liva} alt="" />
                </div>
            </div>
        </div>
    )
}
export default BrandSection;