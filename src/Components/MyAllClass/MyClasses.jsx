import { get_all_order_courses } from '@/services/stripe';

const MyClasses = () => {
    const getMyClass = get_all_order_courses();
    console.log(getMyClass);

    return (
        <div>
            <p>My class</p>
        </div>
    );
};

export default MyClasses;