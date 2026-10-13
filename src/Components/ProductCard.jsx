import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = () => {
    return (
        <div>
            <h2>পণ্য পরিচিতি</h2>
            <Card>
                <div>
                    <Image src={image} alt='image'></Image>
                    <h2>হলুদ গুঁড়া</h2>
                    <p>প্যাকেট ঃ ১০০ গ্রাম</p>
                    <h4>৳ ৬০</h4>
                    <Button>কার্টে যোগ করুন
                        <Link href={'/'}></Link>
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default ProductCard;