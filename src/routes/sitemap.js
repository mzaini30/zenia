import {sql, tulisan} from "./api"
import {stringify} from "qs"
import {headers} from "$lib/headers"

export async function get(){
	function render(data){
		return `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
			${data.map(x => `<url>
				<loc>https://zen.echlus.my.id/${x.slug}</loc>
			</url>`)}
			<url><loc>https://zen.echlus.my.id/</loc></url>
		</urlset>`
	}

	let ambilData = await fetch(sql, {
		method: "post",
		headers,
		body: stringify({
			id: tulisan,
			kunci: "slug-aja"
		})
	})
	ambilData = await ambilData.json()

	return {
		body: render(ambilData),
		headers: {
			"Content-Type": "image/svg+xml"
		}
	}
}
