const mockAxios = jest.genMockFromModule('axios');
mockAxios.create = jest.fn(() => mockAxios);
mockAxios.get.mockResolvedValue({ data: {} });
mockAxios.post.mockResolvedValue({ data: {} });

export default mockAxios;