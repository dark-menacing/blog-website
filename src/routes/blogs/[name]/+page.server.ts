import type { PageServerLoad } from './$types';
import {doc, getDoc} from 'firebase/firestore';
import {database} from '$lib/server/database';
import { error } from '@sveltejs/kit';

export const load = (async ({params}) => {
    const docRef = doc(database, 'blogs', params.name);
    const blog = getDoc(docRef);
    const data = (await blog).data();

    if (!data || !blog) {
        throw error(404);
    }

    return {
        title: data.title,
        text: data.text
    }
}) satisfies PageServerLoad;