package com.example.ec.controller;

import com.example.ec.model.Request;
import com.example.ec.service.RequestService;
import com.fasterxml.jackson.databind.ser.Serializers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.OutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.Base64;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/request")
@CrossOrigin
public class RequestController {
    private static final Path CURRENT_FOLDER = Paths.get(System.getProperty("user.dir") + "/src/main/resources/data");

    @Autowired
    private RequestService requestService;

    @PostMapping("/getall")
    private List<Map<String, Object>> getAllRequest() {
        return requestService.getAllRequest();
    }

    @PostMapping("/getbyid")
    private Map<String, Object> getRequestById(@RequestBody Map<String, Object> obj) {
        Integer id = Integer.parseInt(obj.get("rid").toString());
        return requestService.getRequestById(id);
    }

    @PostMapping(value = "/getimage", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody String getImage(@RequestBody Map<String, Object> image_path) throws IOException {
        byte[] image = Files.readAllBytes(Paths.get(CURRENT_FOLDER + "/" +image_path.get("url").toString()));
        String base64 = Base64.getEncoder().encodeToString(image);
        return base64;
    }

    @PostMapping("/add")
    private boolean addRequest(@RequestParam String card_type, @RequestParam String account_number, @RequestParam(required=false) MultipartFile image) {
        try{
            String path = null;
            if(image != null) {
                Path imagePath = Paths.get("images");
                if (!Files.exists(CURRENT_FOLDER.resolve(imagePath))) {
                    Files.createDirectories(CURRENT_FOLDER.resolve(imagePath));
                }
                Path file = CURRENT_FOLDER.resolve(imagePath).resolve(image.getOriginalFilename());
                OutputStream os = Files.newOutputStream(file);
                os.write(image.getBytes());

                path = imagePath.resolve(image.getOriginalFilename()).toString();
            }

            Request request = new Request(card_type, LocalDate.now().toString(), path, 0, account_number);
            return requestService.addRequest(request);
        }
        catch (Exception e) {
            System.out.println(e);
            return false;
        }
    }

    @PostMapping("check")
    private Map<String, Object> checkCard(@RequestBody Map<String, Object> obj) {
        String accNum = obj.get("accNum").toString();
        return requestService.checkCard(accNum);
    }

    @PostMapping("/approve")
    private boolean createCard(@RequestBody Map<String, Object> obj) {
        Request request = new Request();
        request.setRequest_id(Integer.parseInt(obj.get("request_id").toString()));
        request.setDate_request(obj.get("date_request").toString());
        request.setCard_type(obj.get("card_type").toString());
//        request.setProcessed(Integer.parseInt(obj.get("processed").toString()));
        if(obj.get("image_path") != null) {
            request.setImage_path(obj.get("image_path").toString());
        }
        request.setAccount_number(obj.get("account_number").toString());
        Long lineCredit = null;
        if(obj.get("line_of_credit").toString() != "") {
            lineCredit = Long.parseLong(obj.get("line_of_credit").toString());
        }

        return requestService.approveRequest(request, lineCredit);
    }

    @PostMapping("/decline")
    private boolean createCard(@RequestBody Request request) {
        return requestService.declineRequest(request);
    }
//    @Autowired
//    private RequestRepository requestRepository;
//
//    @GetMapping("/getall")
//    private List<Request> getAll() {
//        return requestRepository.findAll();
//    }
}
