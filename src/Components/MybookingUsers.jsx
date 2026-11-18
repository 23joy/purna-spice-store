import { Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const MybookingUsers = ({user}) => {
    console.log(user)
    return (
        <Card>
            <div>{user?.image?
             <Image src={user?.image}
                    alt={user?.image}
                    width={100}
                    height={100}
                    className='rounded-full'
                ></Image>:<>
                
                </>
            }
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
        </Card>
    );
};

export default MybookingUsers;