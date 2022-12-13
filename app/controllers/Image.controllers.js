require("dotenv").config();

exports.saveImage = (req, res) => {
	var userId = req.params.id;
	var image = new Image();
	var user = new User();
	try
	{
		if(req.files.image)
		{
			var file_path = req.files.image.path;
			var file_split = file_path.split(path.sep);
			var file_name = file_split[2];
			var ext_split = file_name.split('\.');
			var file_ext = ext_split[1];
            
            if(userId != req.user.sub)
                return removeFilesOfUploads(res, file_path, 'No cuenta con los permisos subir una imagen.');
			
			if(file_ext == 'png' || file_ext == 'PNG' || file_ext == 'jpg' || file_ext == 'JPG' || file_ext == 'jpeg' || file_ext == 'JPEG')
			{
                image.file = file_name;
                image.created_at = new Date();
                image.eliminate = false;
                image.user = userId;
				
				image.save((err, imageStored) => {
                    if(err)
                    {
                        logger.error(err);
                        return res.status(500).send({message: 'saveImage - image.save - Error al guardar la imagen.'});
                    } 

                    if(imageStored){
						User.findOne({_id: userId }).exec((err, user) => {
							if(err)
							{ 
								logger.error(err);				
								return res.status(500).send({message: 'updateUser - User.find - Error en la petici贸n!'});
							}
							else{
								user.imageAmount = user.imageAmount+1;
								User.findByIdAndUpdate(userId, user, {new: true}, (err, userUpdated) => {
									if(err)
									{ 
										logger.error(err);				
										return res.status(500).send({message: 'updateUser - User.findByIdAndUpdate - Error en la petición!'});
									}
				
									if (!userUpdated)  
										return res.status(403).send({message: 'No se ha podido actualizar al usuario.'});
								});
							}
						});
						return res.status(200).send({image: imageStored});
						
					
				} else
                        return res.status(403).send({message: 'No se ha guardado la imagen.'});	
                });
			}
			else
				return removeFilesOfUploads(res, file_path, 'Extención no valida.');
		}
		else
			return res.status(403).send({message: 'No se han cargado una imagen.'});
	}
	catch(err)
	{
		logger.error( err);
		return res.status(500).send({message: 'saveImage - Se encontró un error al guardar la imagen!'});
	}
}