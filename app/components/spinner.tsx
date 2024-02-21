import React from 'react';
import { Loader } from 'lucide-react';
import 'tailwindcss/tailwind.css';

const Spinner: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-[300px]">
            <Loader className="animate-spin text-zinc-500 h-12 w-12" />
        </div>
    );
};

export default Spinner;
