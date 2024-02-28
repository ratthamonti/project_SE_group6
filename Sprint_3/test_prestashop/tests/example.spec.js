const { test, expect } = require('@playwright/test');

test('Eng page', async ({ page }) => {
	//main page
	await page.goto('http://localhost:8080/gb/'); //check url
	await expect(page.getByRole('heading', { name: 'Popular Products' })).toBeDisabled //check heading
	await expect(page.getByRole('link', { name: 'Men', exact: true })).toBeDisabled //check category
	await expect(page.getByPlaceholder('Search our catalog')).toBeDisabled //check category
	await expect(page.getByRole('link', { name: 'Prices drop' })).toBeDisabled //check footer
	await expect(page.getByRole('link', { name: 'Delivery' })).toBeDisabled //check footer

	//product page
	await page.getByRole('link', { name: 'JACKET - COMMEMORATIVE 60TH ANNIVERSARY OF KHON KAEN UNIVERSITY.'}).first().click(); //click product
	await expect(page.getByRole('heading', { name: 'Jacket - commemorative 60th' })).toBeDisabled //check heading
	await expect(page.getByRole('button', { name: ' Add to basket' })).toBeDisabled //check add to basket
	await expect(page.getByText('Pea-screen fabric 391 ---')).toBeDisabled //check heading
	await expect(page).toHaveTitle("Jacket - commemorative 60th anniversary of Khon Kaen University.");


	//closet page
 	await page.getByRole('link', { name: 'Men', exact: true }).click();
	await expect(page).toHaveTitle("Men");//check title
	await expect(page.getByText('T-shirts, sweaters, hoodies')).toBeDisabled //check heading
	await expect(page.getByText('Suppliers')).toBeDisabled //check suppliers
	await expect(page.getByRole('link', { name: 'Name, A to Z' })).toBeDisabled //check sort

	//back to main page
	await page.getByRole('link', { name: 'project' }).click();
	await expect(page).toHaveTitle("project_group6");
	await expect(page).toHaveURL("http://localhost:8080/gb/"); 
});

test('Thai page', async ({page}) => {
	//main page
	await page.goto('http://localhost:8080/gb/');
	await page.getByRole('link', { name: 'th', exact: true }).click();
	await expect(page.getByRole('heading', { name: 'สินค้ายอดนิยม' })).toBeDisabled //check heading
	await expect(page.getByRole('link', { name: 'เสื้อผ้าผู้ชาย' })).toBeDisabled //check category
	await expect(page.getByPlaceholder('ค้นหาสินค้า')).toBeDisabled //check category
	await expect(page.getByRole('link', { name: 'ลดราคา', exact: true })).toBeDisabled //check footer
	await expect(page.getByRole('link', { name: 'จัดส่ง' })).toBeDisabled //check footer

	//product page
	await page.getByRole('link', { name: 'เสื้อแจ็ตเก็ต-ที่ระลึก 60 ปี มข.'}).first().click();
	await expect(page.getByRole('heading', { name: 'เสื้อแจ็ตเก็ต-ที่ระลึก 60 ปี มข' })).toBeDisabled //check heading
	await expect(page.getByRole('button', { name: ' หยิบใส่ตะกร้า' })).toBeDisabled //check add to basket
	await expect(page.getByText('เนื้อผ้าพีสกรีน 391')).toBeDisabled //check heading
	await expect(page).toHaveTitle("เสื้อแจ็ตเก็ต-ที่ระลึก 60 ปี มข.");


	//closet page
	await page.getByRole('link', { name: 'เสื้อผ้าผู้ชาย' }).click();
	await expect(page).toHaveTitle("เสื้อผ้าผู้ชาย");//check title
	await expect(page.getByText('เสื้อยืด เสื้อสเวตเตอร์ เสื้อมีฮู้ด และเครื่องประดับสำหรับผู้ชาย ตั้งแต่ขั้นพื้น')).toBeDisabled //check heading
	await expect(page.getByText('ผู้จัดหาสินค้า')).toBeDisabled //check suppliers
	await expect(page.getByRole('link', { name: 'ตามชื่อ A ถึง Z' })).toBeDisabled //check sort

	//back to main page
	await page.getByRole('link', { name: 'project' }).click();
	await expect(page).toHaveTitle("project_group6");
	await expect(page).toHaveURL("http://localhost:8080/th/");
});

test('Indo page', async ({page}) => {
	//main page
	await page.goto('http://localhost:8080/gb/');
	await page.getByRole('link', { name: 'id' }).click();
	await expect(page.getByRole('heading', { name: 'Populer' })).toBeDisabled //check heading
	await expect(page.getByRole('link', { name: 'Laki-laki' })).toBeDisabled //check category
	await expect(page.getByPlaceholder('Cari di Katalog kami')).toBeDisabled //check category
	await expect(page.getByRole('link', { name: 'Turun harga' })).toBeDisabled //check footer
	await expect(page.getByRole('link', { name: 'Pengiriman' })).toBeDisabled //check footer

	//product page
	await page.getByRole('link', { name: 'JAKET - PERINGATAN 60 TAHUN UNIVERSITAS KHON KAEN.'}).first().click();
	await expect(page.getByRole('heading', { name: 'Jaket - peringatan 60 tahun' })).toBeDisabled //check heading
	await expect(page.getByRole('button', { name: ' Beli' })).toBeDisabled //check add to basket
	await expect(page.getByText('Kain layar kacang 391 --- Ide')).toBeDisabled //check heading
	await expect(page).toHaveTitle("Jaket - peringatan 60 tahun Universitas Khon Kaen.");


	//closet page
	await page.getByRole('link', { name: 'Laki-laki' }).click();
	await expect(page).toHaveTitle("Laki-laki");//check title
	await expect(page.getByText('T-shirt, sweater, hoodies dan')).toBeDisabled //check heading
	await expect(page.getByText('PEMASOK')).toBeDisabled //check suppliers
	await expect(page.getByRole('link', { name: 'Nama, A ke Z' })).toBeDisabled //check sort

	//back to main page
	await page.getByRole('link', { name: 'project' }).click();
	await expect(page).toHaveTitle("project_group6");
	await expect(page).toHaveURL("http://localhost:8080/id/");
});