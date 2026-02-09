import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = ({ params }) => {
    return {
        projects: [
            { name: "hello world" }
        ]
    };
};