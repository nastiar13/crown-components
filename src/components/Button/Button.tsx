import React from 'react';
import clsx from 'clsx';

export const Button = ({ classname }: { classname: string }) => {
    return <button className={clsx('text-3xl font-bold underline bg-red-100', classname)}>Click Me!</button>;
};
